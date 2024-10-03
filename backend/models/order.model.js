// Importa la librería de Mongoose.
import mongoose from 'mongoose';

// Define un esquema para las órdenes.
const orderSchema = new mongoose.Schema({
    // Referencia al usuario que realizó la orden.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de User
        required: true,
    },

    // Lista de productos en la orden, cada uno con su ID y cantidad.
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Referencia al modelo de Product
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1, // La cantidad debe ser al menos 1
            },
        },
    ],

    // Precio total de la orden.
    totalPrice: {
        type: Number,
        required: true,
    },

    // Estado de la orden.
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'], // Estados permitidos
        default: 'pending',
    },

    // Fecha de creación de la orden.
    createdAt: {
        type: Date,
        default: Date.now,
    },

    // Fecha de la última actualización de la orden.
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware para actualizar el campo updatedAt antes de guardar.
orderSchema.pre('save', function (next) {
    this.updatedAt = Date.now(); // Actualiza la fecha de la última modificación
    next();
});

// Define el modelo 'Order' basado en el esquema 'orderSchema'.
const orderModel = mongoose.model('Order', orderSchema);

// Exporta el modelo 'orderModel' para que pueda ser utilizado en otras partes de la aplicación.
export default orderModel;
