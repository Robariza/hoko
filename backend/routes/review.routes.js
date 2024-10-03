// Importa las librerías necesarias.
import express from 'express';
import {
    getAllReviews,
    createReview,
    updateReview,
    deleteReview
} from '../controllers/review.controller.js';

// Crea un enrutador de Express.
const router = express.Router();

// Define las rutas para las reseñas.

// Ruta para obtener todas las reseñas (GET).
router.get('/', getAllReviews);

// Ruta para crear una nueva reseña (POST).
router.post('/', createReview);

// Ruta para actualizar una reseña existente (PUT).
router.put('/:id', updateReview);

// Ruta para eliminar una reseña (DELETE).
router.delete('/:id', deleteReview);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
