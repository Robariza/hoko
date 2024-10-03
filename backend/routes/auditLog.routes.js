// Importa el módulo 'Router' de Express para manejar las rutas.
import { Router } from "express";

// Importa los controladores de registro de auditoría. 
// Estos controladores manejarán las operaciones específicas para cada ruta.
import {
    getAllAuditLogs,
    getAuditLogById,
    createAuditLog,
    deleteAuditLog
} from "../controllers/auditLog.controller.js";

// Crea una instancia del enrutador de Express.
const router = Router();

// Define una ruta GET en la raíz ('/'), que devuelve todos los registros de auditoría.
router.get('/', getAllAuditLogs);

// Define una ruta GET que recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta, devuelve un registro de auditoría específico.
router.get('/:id', getAuditLogById);

// Define una ruta POST en la raíz ('/'), que permite crear un nuevo registro de auditoría.
router.post('/', createAuditLog);

// Define una ruta DELETE que recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta, elimina un registro de auditoría específico.
router.delete('/:id', deleteAuditLog);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
