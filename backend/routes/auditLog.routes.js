// Importa las librerías necesarias.
import express from 'express';
import AuditLogController from '../controllers/auditLog.controller.js';

// Crea un router de Express.
const router = express.Router();

// Ruta para obtener todos los registros de auditoría.
router.get('/', AuditLogController.getAll);

// Ruta para crear un nuevo registro de auditoría.
router.post('/', AuditLogController.create);

// Ruta para obtener un registro de auditoría por ID.
router.get('/:id', AuditLogController.getById);

// Ruta para eliminar un registro de auditoría por ID.
router.delete('/:id', AuditLogController.delete);

// Exporta las rutas definidas.
export default router;
