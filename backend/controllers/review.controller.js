// Importa el modelo de reseñas desde el archivo donde está definido ('review.model.js').
import reviewModel from '../models/review.model.js';

// Controlador que obtiene todas las reseñas de la base de datos.
export const getAllReviews = async (req, res) => {
    try {
        // Usa el modelo 'reviewModel' para buscar todas las reseñas en la base de datos.
        const reviews = await reviewModel.find().populate('product user');
        
        // Si la operación es exitosa, responde con un estado 200 (OK) y envía las reseñas en formato JSON.
        res.status(200).json(reviews);
    } catch (error) {
        // Si ocurre un error, responde con un estado 500 (Error del servidor) y un mensaje de error en formato JSON.
        res.status(500).json({ message: 'Error al obtener reseñas.' });
    }
};

// Controlador que crea una nueva reseña en la base de datos.
export const createReview = async (req, res) => {
    try {
        // Crea una nueva instancia del modelo 'reviewModel' usando los datos recibidos en 'req.body'.
        const review = new reviewModel(req.body);
        
        // Guarda la nueva reseña en la base de datos.
        await review.save();
        
        // Si la creación es exitosa, responde con un estado 200 (OK) y la reseña recién creada en formato JSON.
        res.status(200).json(review);
    } catch (error) {
        // Si ocurre un error al crear la reseña, responde con un estado 500 y un mensaje de error.
        res.status(500).json({ message: 'Error al crear reseña.' });
    }
};

// Controlador que actualiza una reseña existente en la base de datos.
export const updateReview = async (req, res) => {
    try {
        // Busca una reseña por su ID y la actualiza con los datos que se reciben en 'req.body'.
        // {new: true} asegura que se devuelva la reseña actualizada en la respuesta.
        const review = await reviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Si no se encuentra la reseña, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!review) return res.status(404).json({ message: 'Reseña no encontrada.' });
        
        // Si la actualización es exitosa, no se envía una respuesta explícita (se puede mejorar).
        res.status(200).json(review);
    } catch (error) {
        // Si ocurre un error en la actualización, responde con un estado 400 (Solicitud incorrecta) y un mensaje de error.
        res.status(400).json({ message: 'Error al actualizar reseña.' });
    }
};

// Controlador que elimina una reseña de la base de datos.
export const deleteReview = async (req, res) => {
    try {
        // Busca una reseña por su ID y la elimina de la base de datos.
        const review = await reviewModel.findByIdAndDelete(req.params.id);
        
        // Si no se encuentra la reseña, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!review) return res.status(404).json({ message: 'Reseña no encontrada.' });
        
        // Si la eliminación es exitosa, no se envía una respuesta explícita (se puede mejorar).
        res.status(200).json({ message: 'Reseña eliminada exitosamente.' });
    } catch (error) {
        // Si ocurre un error en la eliminación, responde con un estado 500 (Error del servidor) y un mensaje de error.
        res.status(500).json({ message: 'Error al eliminar reseña.' });
    }
};
