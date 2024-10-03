import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cart.controller.js';

const router = Router();

// Ruta para agregar un producto al carrito
router.post('/', addToCart);

// Ruta para obtener el carrito de un usuario
router.get('/:userId', getCart);

export default router;
