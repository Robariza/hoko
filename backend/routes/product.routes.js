// Importa el módulo 'Router' de Express. Este módulo nos permite crear rutas para manejar solicitudes HTTP (GET, POST, PUT, DELETE).
import { Router } from "express";

// Importa los controladores de producto que manejan las operaciones específicas para cada ruta.
// Cada controlador corresponde a una operación CRUD (crear, leer, actualizar, eliminar).
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

// Crea una instancia del enrutador de Express. Este objeto nos permite definir rutas para manejar solicitudes.
const router = Router();

// Define una ruta GET en la raíz ('/'), que al ser accedida ejecuta el controlador 'getAllProducts'.
// Esto significa que cuando se haga una solicitud GET a '/products', se devolverán todos los productos.
router.get('/', getAllProducts);

// Define una ruta POST en la raíz ('/'), que ejecuta el controlador 'createProduct'.
// Esto permite crear un nuevo producto enviando una solicitud POST con los datos en el cuerpo de la solicitud.
router.post('/', createProduct);

// Define una ruta PUT que recibe un parámetro dinámico ':id'.
// Cuando se accede a esta ruta (por ejemplo, '/products/123'), ejecuta el controlador 'updateProduct' para actualizar el producto con ese ID.
router.put('/:id', updateProduct);

// Define una ruta DELETE que también recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta (por ejemplo, '/products/123'), se ejecuta el controlador 'deleteProduct' para eliminar el producto con ese ID.
router.delete('/:id', deleteProduct);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación, generalmente en el archivo principal (app.js o server.js).
export default router;
