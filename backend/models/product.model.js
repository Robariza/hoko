// Importa la librería de Mongoose, que facilita la interacción con MongoDB usando modelos y esquemas.
import mongoose from 'mongoose';

// Importa un middleware personalizado llamado 'updateTimestamp'.
// Este middleware se usará para actualizar el campo 'updatedAt' antes de guardar un documento.
import { updateTimestamp } from '../middlewares/updateTimestamp.js';

// Define un esquema para los productos, que representa la estructura de los documentos de productos en la base de datos.
// 'productSchema' especifica los campos que tendrá cada documento y sus tipos de datos.
const productSchema = new mongoose.Schema({
    
    // Campo 'name', que es de tipo String y es obligatorio (required: true).
    name: {
        type: String,
        required: true,
    },

    // Campo 'price', que también es de tipo String y es obligatorio.
    // Idealmente, el precio debería ser de tipo Number, pero aquí se ha definido como String.
    price: {
        type: String,
        required: true,
    },

    // Campo 'description', que es de tipo String. No es obligatorio, por lo que no tiene la propiedad 'required'.
    description: {
        type: String,
    },

    // Campo 'stock', que es de tipo Number. Tiene un valor por defecto de 0 si no se especifica un valor al crear un producto.
    stock: {
        type: Number,
        default: 0,
    },

    // Campo 'images', que es de tipo String. Aquí se almacenará la URL de la imagen o imágenes del producto.
    // Tiene un valor por defecto de una cadena vacía ('').
    images: {
        type: String,
        default: ''
    },

    // Campo 'createdAt', que es de tipo Date y almacena la fecha en la que se creó el producto.
    // Tiene un valor por defecto que es la fecha actual al momento de crear el producto (Date.now).
    createdAt: {
        type: Date,
        default: Date.now
    },

    // Campo 'updatedAt', que es de tipo Date y almacena la fecha de la última actualización del producto.
    // Al igual que 'createdAt', tiene un valor por defecto que es la fecha actual.
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

// Aplica el middleware 'pre' para que se ejecute antes de guardar el documento en la base de datos.
// 'updateTimestamp' es un middleware que actualiza el campo 'updatedAt' cada vez que un documento es modificado.
productSchema.pre('save', updateTimestamp);

// Define el modelo 'Product' basado en el esquema 'productSchema'.
// Este modelo será utilizado para interactuar con la colección 'products' en MongoDB.
const productModel = mongoose.model('Product', productSchema);

// Exporta el modelo 'productModel' para que pueda ser utilizado en otras partes de la aplicación.
export default productModel;
