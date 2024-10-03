import orderModel from '../models/order.model.js';

// Controlador que obtiene todas las órdenes de la base de datos.
export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('user').populate('products.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener órdenes.' });
    }
};

// Controlador que crea una nueva orden en la base de datos.
export const createOrder = async (req, res) => {
    try {
        const order = new orderModel(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la orden.' });
    }
};

// Controlador que actualiza una orden existente en la base de datos.
export const updateOrder = async (req, res) => {
    try {
        const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Orden no encontrada.' });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la orden.' });
    }
};

// Controlador que elimina una orden de la base de datos.
export const deleteOrder = async (req, res) => {
    try {
        const order = await orderModel.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Orden no encontrada.' });
        res.status(204).send(); // Se utiliza 204 No Content para indicar que se eliminó correctamente.
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la orden.' });
    }
};
