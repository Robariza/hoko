// Importa la librería de Mongoose, que facilita la interacción con MongoDB usando modelos y esquemas.
import mongoose from 'mongoose';

// Importa la librería bcrypt para encriptar la contraseña.
import bcrypt from 'bcrypt';

// Importa un middleware personalizado llamado 'updateTimestamp' para actualizar el campo 'updatedAt' antes de guardar un documento.
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

// Define un esquema para los usuarios, que representa la estructura de los documentos de usuarios en la base de datos.
const userSchema = new mongoose.Schema({
    
    // Campo 'name', que es de tipo String y es obligatorio (required: true).
    name: {
        type: String,
        required: true,
    },

    // Campo 'email', que es de tipo String, obligatorio y único para cada usuario.
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'],
    },

    // Campo 'password', que es de tipo String y es obligatorio. No se almacena en texto plano.
    password: {
        type: String,
        required: true,
    },

    // Campo 'role', que indica si el usuario es un administrador o un cliente regular.
    // El valor por defecto es 'user', pero puede ser 'admin'.
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },

    // Campo 'createdAt', que es de tipo Date y almacena la fecha en la que se creó el usuario.
    // Tiene un valor por defecto que es la fecha actual al momento de crear el usuario (Date.now).
    createdAt: {
        type: Date,
        default: Date.now,
    },

    // Campo 'updatedAt', que es de tipo Date y almacena la fecha de la última actualización del usuario.
    // Al igual que 'createdAt', tiene un valor por defecto que es la fecha actual.
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Aplica el middleware 'pre' para que se ejecute antes de guardar el documento en la base de datos.
// En este caso, encriptamos la contraseña antes de guardarla.
userSchema.pre('save', async function (next) {
    // Solo encripta la contraseña si ha sido modificada o es nueva
    if (!this.isModified('password')) {
        return next();
    }

    try {
        // Genera un "salt" y encripta la contraseña con bcrypt.
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Aplica el middleware 'pre' para actualizar el campo 'updatedAt' antes de guardar el documento en la base de datos.
userSchema.pre('save', updateTimestamp);

// Método para comparar la contraseña ingresada con la encriptada en la base de datos.
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Define el modelo 'User' basado en el esquema 'userSchema'.
// Este modelo será utilizado para interactuar con la colección 'users' en MongoDB.
const userModel = mongoose.model('User', userSchema);

// Exporta el modelo 'userModel' para que pueda ser utilizado en otras partes de la aplicación.
export default userModel;
