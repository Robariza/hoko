import mongoose from 'mongoose';
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
    },

    price: {
        type: String,
        required: true,
        min: 0,
    },

    stock: {
        type: Number,
        default: 0,
    },

    images: {
        type: String,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },
});

productSchema.pre('save', updateTimestamp);

const productModel = mongoose.model('Product', productSchema);

export default productModel;
