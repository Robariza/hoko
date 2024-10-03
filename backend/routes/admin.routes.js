// Importa el módulo 'Router' de Express para manejar solicitudes HTTP.
import { Router } from "express";

// Importa los controladores de admin que manejan las operaciones específicas para cada ruta.
import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getAllProducts,
    updateProduct,
    deleteProduct,
} from "../controllers/admin.controller.js";

// Crea una instancia del enrutador de Express.
const router = Router();

// Rutas para la gestión de usuarios
router.get('/users', getAllUsers); // Obtiene todos los usuarios
router.post('/users', createUser); // Crea un nuevo usuario
router.put('/users/:id', updateUser); // Actualiza el usuario con el ID especificado
router.delete('/users/:id', deleteUser); // Elimina el usuario con el ID especificado

// Rutas para la gestión de pedidos
router.get('/orders', getAllOrders); // Obtiene todos los pedidos
router.post('/orders', createOrder); // Crea un nuevo pedido
router.put('/orders/:id', updateOrder); // Actualiza el pedido con el ID especificado
router.delete('/orders/:id', deleteOrder); // Elimina el pedido con el ID especificado

// Rutas para la gestión de productos
router.get('/products', getAllProducts); // Obtiene todos los productos
router.put('/products/:id', updateProduct); // Actualiza el producto con el ID especificado
router.delete('/products/:id', deleteProduct); // Elimina el producto con el ID especificado

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
