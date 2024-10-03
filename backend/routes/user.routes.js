// Importa el módulo 'Router' de Express para manejar solicitudes HTTP.
import { Router } from "express";

// Importa los controladores de usuario que manejan las operaciones específicas para cada ruta.
import { getAllUsers, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";

// Crea una instancia del enrutador de Express.
const router = Router();

// Define una ruta GET en la raíz ('/'), que al ser accedida ejecuta el controlador 'getAllUsers'.
// Esto significa que cuando se haga una solicitud GET a '/users', se devolverán todos los usuarios.
router.get('/', getAllUsers);

// Define una ruta POST en la raíz ('/'), que ejecuta el controlador 'createUser'.
// Esto permite crear un nuevo usuario enviando una solicitud POST con los datos en el cuerpo de la solicitud.
router.post('/', createUser);

// Define una ruta PUT que recibe un parámetro dinámico ':id'.
// Cuando se accede a esta ruta (por ejemplo, '/users/123'), ejecuta el controlador 'updateUser' para actualizar el usuario con ese ID.
router.put('/:id', updateUser);

// Define una ruta DELETE que también recibe un parámetro dinámico ':id'.
// Al acceder a esta ruta (por ejemplo, '/users/123'), se ejecuta el controlador 'deleteUser' para eliminar el usuario con ese ID.
router.delete('/:id', deleteUser);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación, generalmente en el archivo principal (app.js o server.js).
export default router;
