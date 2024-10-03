import Cart from '../models/cart.model.js';

export const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
        } else {
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar al carrito.' });
    }
};

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito.' });
    }
};
