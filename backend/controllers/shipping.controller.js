import Shipping from '../models/shipping.model.js';

export const createShipping = async (req, res) => {
    try {
        const shipping = new Shipping(req.body);
        await shipping.save();
        res.status(201).json(shipping);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el envío.' });
    }
};

export const getShippingInfo = async (req, res) => {
    try {
        const shippingInfo = await Shipping.find();
        res.status(200).json(shippingInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la información de envío.' });
    }
};
