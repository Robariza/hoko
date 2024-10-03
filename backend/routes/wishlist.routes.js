// Importa el módulo 'Router' de Express para manejar solicitudes HTTP.
import { Router } from "express";

// Importa los controladores de wishlist que manejan las operaciones específicas para cada ruta.
import { getAllWishlists, createWishlist, updateWishlist, deleteWishlist } from "../controllers/wishlist.controller.js";

// Crea una instancia del enrutador de Express.
const router = Router();

// Define una ruta GET en la raíz ('/'), que al ser accedida ejecuta el controlador 'getAllWishlists'.
// Esto significa que cuando se haga una solicitud GET a '/wishlists', se devolverán todas las listas de deseos.
router.get('/', getAllWishlists);

// Define una ruta POST en la raíz ('/'), que ejecuta el controlador 'createWishlist'.
// Esto permite crear una nueva lista de deseos enviando una solicitud POST con los datos en el cuerpo de la solicitud.
router.post('/', createWishlist);

// Define una ruta PUT que recibe un parámetro dinámico ':id'.
// Cuando se accede a esta ruta (por ejemplo, '/wishlists/123'), ejecuta el controlador 'updateWishlist' para actualizar la lista de deseos con ese ID.
router.put('/:id', updateWishlist);

// Define una ruta DELETE que también recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta (por ejemplo, '/wishlists/123'), se ejecuta el controlador 'deleteWishlist' para eliminar la lista de deseos con ese ID.
router.delete('/:id', deleteWishlist);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación, generalmente en el archivo principal (app.js o server.js).
export default router;
