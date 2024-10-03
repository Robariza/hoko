// Importa el módulo 'Router' de Express para manejar solicitudes HTTP.
import { Router } from "express";

// Importa los controladores de orden que manejan las operaciones específicas para cada ruta.
import { getAllOrders, createOrder, updateOrder, deleteOrder } from "../controllers/order.controller.js";

// Crea una instancia del enrutador de Express.
const router = Router();

// Define una ruta GET en la raíz ('/'), que al ser accedida ejecuta el controlador 'getAllOrders'.
// Esto significa que cuando se haga una solicitud GET a '/orders', se devolverán todos los pedidos.
router.get('/', getAllOrders);

// Define una ruta POST en la raíz ('/'), que ejecuta el controlador 'createOrder'.
// Esto permite crear un nuevo pedido enviando una solicitud POST con los datos en el cuerpo de la solicitud.
router.post('/', createOrder);

// Define una ruta PUT que recibe un parámetro dinámico ':id'.
// Cuando se accede a esta ruta (por ejemplo, '/orders/123'), ejecuta el controlador 'updateOrder' para actualizar el pedido con ese ID.
router.put('/:id', updateOrder);

// Define una ruta DELETE que también recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta (por ejemplo, '/orders/123'), se ejecuta el controlador 'deleteOrder' para eliminar el pedido con ese ID.
router.delete('/:id', deleteOrder);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación, generalmente en el archivo principal (app.js o server.js).
export default router;
