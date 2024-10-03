import Payment from "../models/payment.model.js";

export const createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pago.' });
    }
};

export const getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos.' });
    }
};
