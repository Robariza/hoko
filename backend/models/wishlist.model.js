// Importa la librería de Mongoose.
import mongoose from 'mongoose';
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

// Define un esquema para las listas de deseos.
const wishlistSchema = new mongoose.Schema({
    // Referencia al usuario que tiene la lista de deseos.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de User
        required: true,
    },

    // Lista de productos en la lista de deseos.
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Referencia al modelo de Product
        },
    ],

    // Fecha de creación de la lista de deseos.
    createdAt: {
        type: Date,
        default: Date.now,
    },

    // Fecha de la última actualización de la lista de deseos.
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware para actualizar el campo updatedAt antes de guardar.
wishlistSchema.pre('save', updateTimestamp);

// Define el modelo 'Wishlist' basado en el esquema 'wishlistSchema'.
const wishlistModel = mongoose.model('Wishlist', wishlistSchema);

// Exporta el modelo 'wishlistModel' para que pueda ser utilizado en otras partes de la aplicación.
export default wishlistModel;
