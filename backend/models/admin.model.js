// Importa la librería de Mongoose para facilitar la interacción con MongoDB.
import mongoose from 'mongoose';

// Importa un middleware personalizado para actualizar el timestamp.
// Esto actualizará el campo 'updatedAt' antes de guardar o actualizar un documento.
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

// Define un esquema para los administradores, representando la estructura de los documentos de admin en la base de datos.
const adminSchema = new mongoose.Schema({
    
    // Campo 'username', que es de tipo String y es obligatorio.
    username: {
        type: String,
        required: true,
        unique: true, // Asegura que no haya dos administradores con el mismo nombre de usuario.
    },

    // Campo 'password', que es de tipo String y es obligatorio.
    password: {
        type: String,
        required: true,
    },

    // Campo 'role', que es de tipo String para especificar el rol del usuario (por ejemplo, "admin").
    role: {
        type: String,
        default: 'admin', // Valor por defecto del rol.
    },

    // Campo 'createdAt', que almacena la fecha de creación de la cuenta de administrador.
    createdAt: {
        type: Date,
        default: Date.now
    },

    // Campo 'updatedAt', que almacena la fecha de la última actualización de la información del administrador.
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

// Aplica el middleware 'pre' para que se ejecute antes de guardar el documento.
// 'updateTimestamp' actualiza el campo 'updatedAt' en cada modificación.
adminSchema.pre('save', updateTimestamp);

// Define el modelo 'Admin' basado en el esquema 'adminSchema'.
// Este modelo será utilizado para interactuar con la colección 'admins' en MongoDB.
const adminModel = mongoose.model('Admin', adminSchema);

// Exporta el modelo 'adminModel' para que pueda ser utilizado en otras partes de la aplicación.
export default adminModel;
