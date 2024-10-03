// Importa la librería de Mongoose.
import mongoose from 'mongoose';
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

// Define un esquema para las reseñas.
const reviewSchema = new mongoose.Schema({
    // Referencia al producto que se está reseñando.
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Referencia al modelo de Product
        required: true,
    },

    // Referencia al usuario que dejó la reseña.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de User
        required: true,
    },

    // Calificación dada por el usuario.
    rating: {
        type: Number,
        required: true,
        min: 1, // La calificación mínima es 1
        max: 5, // La calificación máxima es 5
    },

    // Comentario adicional sobre el producto.
    comment: {
        type: String,
        default: '',
    },

    // Fecha de creación de la reseña.
    createdAt: {
        type: Date,
        default: Date.now,
    },

    // Fecha de la última actualización de la reseña.
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware para actualizar el campo updatedAt antes de guardar.
reviewSchema.pre('save', updateTimestamp);

// Define el modelo 'Review' basado en el esquema 'reviewSchema'.
const reviewModel = mongoose.model('Review', reviewSchema);

// Exporta el modelo 'reviewModel' para que pueda ser utilizado en otras partes de la aplicación.
export default reviewModel;
