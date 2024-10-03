// Importa el modelo de lista de deseos.
import Wishlist from '../models/wishlist.model.js';

// Función para obtener todas las listas de deseos.
export const getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.find() // Obtiene todas las listas de deseos.
            .populate('user', 'name email') // Poblamos la información del usuario.
            .populate('products'); // Poblamos la información de los productos.
        res.status(200).json(wishlists); // Devuelve una respuesta con las listas de deseos encontradas.
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las listas de deseos', error });
    }
};

// Función para crear una nueva lista de deseos.
export const createWishlist = async (req, res) => {
    const { user, products } = req.body; // Desestructura los datos del cuerpo de la solicitud.

    const newWishlist = new Wishlist({ user, products }); // Crea una nueva instancia de wishlist.

    try {
        const savedWishlist = await newWishlist.save(); // Guarda la nueva lista de deseos en la base de datos.
        res.status(201).json(savedWishlist); // Devuelve una respuesta con la lista de deseos creada.
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la lista de deseos', error });
    }
};

// Función para actualizar una lista de deseos existente.
export const updateWishlist = async (req, res) => {
    const { id } = req.params; // Obtiene el ID de la lista de deseos de los parámetros de la solicitud.
    const updates = req.body; // Obtiene los datos que se quieren actualizar.

    try {
        const updatedWishlist = await Wishlist.findByIdAndUpdate(id, updates, { new: true }) // Actualiza la lista de deseos en la base de datos.
            .populate('user', 'name email') // Poblamos la información del usuario.
            .populate('products'); // Poblamos la información de los productos.
        
        if (!updatedWishlist) {
            return res.status(404).json({ message: 'Lista de deseos no encontrada' });
        }
        res.status(200).json(updatedWishlist); // Devuelve la lista de deseos actualizada.
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la lista de deseos', error });
    }
};

// Función para eliminar una lista de deseos.
export const deleteWishlist = async (req, res) => {
    const { id } = req.params; // Obtiene el ID de la lista de deseos de los parámetros de la solicitud.

    try {
        const deletedWishlist = await Wishlist.findByIdAndDelete(id); // Elimina la lista de deseos de la base de datos.
        if (!deletedWishlist) {
            return res.status(404).json({ message: 'Lista de deseos no encontrada' });
        }
        res.status(200).json({ message: 'Lista de deseos eliminada con éxito' }); // Devuelve un mensaje de éxito.
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la lista de deseos', error });
    }
};

// Función para obtener una lista de deseos por ID.
export const getWishlistById = async (req, res) => {
    const { id } = req.params; // Obtiene el ID de la lista de deseos de los parámetros de la solicitud.

    try {
        const wishlist = await Wishlist.findById(id) // Busca la lista de deseos en la base de datos.
            .populate('user', 'name email') // Poblamos la información del usuario.
            .populate('products'); // Poblamos la información de los productos.
        
        if (!wishlist) {
            return res.status(404).json({ message: 'Lista de deseos no encontrada' });
        }
        res.status(200).json(wishlist); // Devuelve la lista de deseos encontrada.
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de deseos', error });
    }
};
