// Importa la librería de Mongoose para facilitar la interacción con MongoDB.
import mongoose from 'mongoose';

// Define un esquema para el registro de auditoría, representando la estructura de los documentos de auditoría en la base de datos.
const auditLogSchema = new mongoose.Schema({
    
    // Campo 'admin', que es de tipo ObjectId y referencia al modelo de Admin.
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', // Referencia al modelo Admin.
        required: true, // Este campo es obligatorio.
    },

    // Campo 'action', que es de tipo String para describir la acción realizada (ej. "create", "update", "delete").
    action: {
        type: String,
        required: true, // Este campo es obligatorio.
    },

    // Campo 'targetType', que es de tipo String para especificar el tipo de entidad afectada (ej. "Product", "User", "Order").
    targetType: {
        type: String,
        required: true, // Este campo es obligatorio.
    },

    // Campo 'targetId', que es de tipo ObjectId para almacenar el ID del documento afectado.
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, // Este campo es obligatorio.
    },

    // Campo 'timestamp', que almacena la fecha y hora en que se realizó la acción.
    timestamp: {
        type: Date,
        default: Date.now // Valor por defecto que es la fecha actual.
    },

    // Campo 'details', que es de tipo String para información adicional sobre la acción (opcional).
    details: {
        type: String,
    },
});

// Define el modelo 'AuditLog' basado en el esquema 'auditLogSchema'.
// Este modelo será utilizado para interactuar con la colección 'auditLogs' en MongoDB.
const auditLogModel = mongoose.model('AuditLog', auditLogSchema);

// Exporta el modelo 'auditLogModel' para que pueda ser utilizado en otras partes de la aplicación.
export default auditLogModel;
