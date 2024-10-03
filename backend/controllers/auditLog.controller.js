// Importa el modelo de registro de auditoría.
import auditLogModel from '../models/auditLog.model.js';

// Controlador para manejar las operaciones de auditoría
class AuditLogController {
    // Método para obtener todos los registros de auditoría
    async getAll(req, res) {
        try {
            const auditLogs = await auditLogModel.find()
                .populate('admin', 'name email') // Poblamos la información del administrador.
                .sort({ timestamp: -1 }); // Ordena por fecha descendente
            
            res.status(200).json(auditLogs); // Devuelve los registros encontrados.
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los registros de auditoría', error });
        }
    }

    // Método para crear un nuevo registro de auditoría
    async create(req, res) {
        const { admin, action, targetType, targetId, details } = req.body;

        const newAuditLog = new auditLogModel({ admin, action, targetType, targetId, details });

        try {
            const savedAuditLog = await newAuditLog.save();
            res.status(201).json(savedAuditLog); // Devuelve el registro creado.
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de auditoría', error });
        }
    }

    // Método para eliminar un registro de auditoría por ID
    async delete(req, res) {
        const { id } = req.params;

        try {
            const deletedAuditLog = await auditLogModel.findByIdAndDelete(id);
            if (!deletedAuditLog) {
                return res.status(404).json({ message: 'Registro de auditoría no encontrado' });
            }
            res.status(200).json({ message: 'Registro de auditoría eliminado con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de auditoría', error });
        }
    }

    // Método para obtener un registro de auditoría por ID
    async getById(req, res) {
        const { id } = req.params;

        try {
            const auditLog = await auditLogModel.findById(id)
                .populate('admin', 'name email');
            
            if (!auditLog) {
                return res.status(404).json({ message: 'Registro de auditoría no encontrado' });
            }
            res.status(200).json(auditLog); // Devuelve el registro encontrado.
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el registro de auditoría', error });
        }
    }
}

// Exporta una instancia del controlador
export default new AuditLogController();
