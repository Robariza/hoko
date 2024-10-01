// Importa el modelo de productos desde el archivo donde está definido ('product.model.js').
// Este modelo se utilizará para interactuar con la base de datos.
import productModel from "../models/product.model.js";

// Controlador que obtiene todos los productos de la base de datos.
export const getAllProducts = async (req, res) => {
    try {
        // Usa el modelo 'productModel' para buscar todos los productos en la base de datos.
        const products = await productModel.find();
        
        // Si la operación es exitosa, responde con un estado 200 (OK) y envía los productos en formato JSON.
        res.status(200).json(products);
    } catch (error) {
        // Si ocurre un error, responde con un estado 500 (Error del servidor) y un mensaje de error en formato JSON.
        res.status(500).json({ message: 'Error al obtener productos.' });
    }
};

// Controlador que crea un nuevo producto en la base de datos.
export const createProduct = async (req, res) => {
    try {
        // Crea una nueva instancia del modelo 'productModel' usando los datos recibidos en 'req.body'.
        const product = new productModel(req.body);
        
        // Guarda el nuevo producto en la base de datos.
        await product.save();
        
        // Si la creación es exitosa, responde con un estado 200 (OK) y el producto recién creado en formato JSON.
        res.status(200).json(product);
    } catch (error) {
        // Si ocurre un error al crear el producto, responde con un estado 500 y un mensaje de error.
        res.status(500).json({ message: 'Error al crear producto.' });
    }
};

// Controlador que actualiza un producto existente en la base de datos.
export const updateProduct = async (req, res) => {
    try {
        // Busca un producto por su ID y lo actualiza con los datos que se reciben en 'req.body'.
        // {new: true} asegura que se devuelva el producto actualizado en la respuesta.
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Si no se encuentra el producto, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!product) return res.status(404).json({ message: 'Producto no encontrado.' });
        
        // Si la actualización es exitosa, no se envía una respuesta explícita (se puede mejorar).
    } catch (error) {
        // Si ocurre un error en la actualización, responde con un estado 400 (Solicitud incorrecta) y un mensaje de error.
        res.status(400).json({ message: 'Error al actualizar producto.' });
    }
};

// Controlador que elimina un producto de la base de datos.
export const deleteProduct = async (req, res) => {
    try {
        // Busca un producto por su ID y lo elimina de la base de datos.
        const product = await productModel.findByIdAndDelete(req.params.id);
        
        // Si no se encuentra el producto, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!product) return res.status(404).json({ message: 'Producto no encontrado.' });
        
        // Si la eliminación es exitosa, no se envía una respuesta explícita (se puede mejorar).
    } catch (error) {
        // Si ocurre un error en la eliminación, responde con un estado 500 (Error del servidor) y un mensaje de error.
        res.status(500).json({ message: 'Error al eliminar producto.' });
    }
};
