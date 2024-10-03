import express from 'express';
import {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/order.controller.js';

const router = express.Router();

// Ruta para obtener todas las órdenes.
router.get('/', getAllOrders);

// Ruta para crear una nueva orden.
router.post('/', createOrder);

// Ruta para actualizar una orden existente por su ID.
router.put('/:id', updateOrder);

// Ruta para eliminar una orden existente por su ID.
router.delete('/:id', deleteOrder);

export default router;
