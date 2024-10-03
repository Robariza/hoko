import categoryModel from "../models/category.model.js";

// Obtener todas las categorías
export const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener categorías.', error: error.message });
    }
};

// Obtener una categoría por ID
export const getCategoryById = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada.' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría.', error: error.message });
    }
};

// Crear una nueva categoría
export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Verificar si la categoría ya existe
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'La categoría ya existe.' });
        }

        // Crear una nueva categoría
        const newCategory = new categoryModel({
            name,
            description,
        });

        // Guardar la categoría en la base de datos
        await newCategory.save();

        res.status(201).json({ message: 'Categoría creada exitosamente.', category: newCategory });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría.', error: error.message });
    }
};

// Actualizar una categoría
export const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Buscar y actualizar la categoría por ID
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            req.params.id, 
            { name, description }, 
            { new: true, runValidators: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Categoría no encontrada.' });
        }

        res.status(200).json({ message: 'Categoría actualizada exitosamente.', category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría.', error: error.message });
    }
};

// Eliminar una categoría
export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await categoryModel.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Categoría no encontrada.' });
        }

        res.status(200).json({ message: 'Categoría eliminada exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría.', error: error.message });
    }
};
