import express from 'express';
import {
    getAllAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from '../controllers/admin.controller.js';

const router = express.Router();

// Ruta para obtener todos los administradores
router.get('/', getAllAdmins);

// Ruta para crear un nuevo administrador
router.post('/', createAdmin);

// Ruta para actualizar un administrador existente por ID
router.put('/:id', updateAdmin);

// Ruta para eliminar un administrador por ID
router.delete('/:id', deleteAdmin);

// Exporta el router para que pueda ser utilizado en otros archivos
export default router;
