// Importa las librerías necesarias.
import express from 'express';
import {
    getAllWishlists,
    createWishlist,
    updateWishlist,
    deleteWishlist,
    getWishlistById
} from '../controllers/wishlist.controller.js';

// Crea un enrutador de Express.
const router = express.Router();

// Define las rutas para las listas de deseos.

// Ruta para obtener todas las listas de deseos (GET).
router.get('/', getAllWishlists);

// Ruta para crear una nueva lista de deseos (POST).
router.post('/', createWishlist);

// Ruta para actualizar una lista de deseos existente (PUT).
router.put('/:id', updateWishlist);

// Ruta para eliminar una lista de deseos (DELETE).
router.delete('/:id', deleteWishlist);

// Ruta para obtener una lista de deseos por ID (GET).
router.get('/:id', getWishlistById);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
