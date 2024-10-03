import { Router } from 'express';
import { createPayment, getPayments } from '../controllers/payment.controller.js';

const router = Router();

// Ruta para crear un nuevo pago
router.post('/', createPayment);

// Ruta para obtener todos los pagos
router.get('/', getPayments);

export default router;
