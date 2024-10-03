import mongoose from 'mongoose';
import { updateTimestamp } from '../middlewares/updateTimestamp';

const shippingSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    shippingMethod: {
        type: String,
        enum: ['Standard', 'Express'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Returned'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

shippingSchema.pre('save',updateTimestamp)

const Shipping = mongoose.model('Shipping', shippingSchema);
export default Shipping;
