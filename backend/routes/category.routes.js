import Router from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/', getAllCategories);

// Ruta para obtener una categoría por ID
router.get('/:id', getCategoryById);

// Ruta para crear una nueva categoría
router.post('/', createCategory);

// Ruta para actualizar una categoría por ID
router.put('/:id', updateCategory);

// Ruta para eliminar una categoría por ID
router.delete('/:id', deleteCategory);

export default router;