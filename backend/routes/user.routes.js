// Importa las librerías necesarias.
import express from 'express';
import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
} from '../controllers/user.controller.js';

// Crea un enrutador de Express.
const router = express.Router();

// Define las rutas para los usuarios.

// Ruta para obtener todos los usuarios (GET).
router.get('/', getAllUsers);

// Ruta para crear un nuevo usuario (POST).
router.post('/', createUser);

// Ruta para actualizar un usuario existente (PUT).
router.put('/:id', updateUser);

// Ruta para eliminar un usuario (DELETE).
router.delete('/:id', deleteUser);

// Ruta para obtener un usuario por ID (GET).
router.get('/:id', getUserById);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
