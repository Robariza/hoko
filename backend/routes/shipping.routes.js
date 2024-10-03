import { Router } from 'express';
import { createShipping, getShippingInfo } from '../controllers/shipping.controller.js';

const router = Router();

// Ruta para crear un nuevo envío
router.post('/', createShipping);

// Ruta para obtener información de envío
router.get('/', getShippingInfo);

export default router;
