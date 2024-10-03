// Importa Express, que es el framework para crear el servidor y manejar las rutas.
import express from 'express';

// Importa dotenv, que permite cargar variables de entorno desde un archivo '.env'.
import dotenv from 'dotenv';

// Importa cors, que permite habilitar CORS (Cross-Origin Resource Sharing) para gestionar las políticas de acceso entre dominios.
import cors from 'cors';

// Importa la función para conectar a MongoDB desde el archivo de configuración 'db.js'.
import connectionMongo from './config/db.js';

// Importa las rutas de productos desde el archivo 'product.routes.js', que contiene las rutas para las operaciones CRUD de productos.
import productRoutes from './routes/product.routes.js';

// Crea una instancia de la aplicación Express.
const app = express();

// Configura dotenv para cargar las variables de entorno definidas en el archivo '.env'.
dotenv.config();

// Define la variable 'port' para el puerto en el que se ejecutará el servidor.
// Si no está definida en las variables de entorno (process.env.PORT), usará el puerto 6000 por defecto.
const port = process.env.PORT || 6000;

// Establece la conexión a la base de datos MongoDB llamando a la función 'connectionMongo'.
connectionMongo();

// Usa el middleware de Express para habilitar el análisis de datos JSON en las solicitudes entrantes (req.body).
app.use(express.json());

// Usa el middleware de CORS para permitir que el servidor acepte solicitudes desde otros dominios.
app.use(cors());

// Define las rutas para los productos. Todas las solicitudes que comiencen con '/products' se manejarán en 'productRoutes' (CRUD de productos).
app.use('/products', productRoutes);

// Inicia el servidor en el puerto definido y escucha las solicitudes entrantes.
// Muestra un mensaje en la consola para confirmar que el servidor está corriendo y en qué URL se está ejecutando.
app.listen(port, () => {
    console.log(`El servidor se está escuchando en http://localhost:${port}`);
});
