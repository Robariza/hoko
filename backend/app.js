// Importaciones 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionMongo from './config/db.js';

// Configuración del servidor 
const app = express();

// Configuración de variables de entorno
dotenv.config();

// Definición de variables
const port = process.env.PORT || 6000; 

// Conexión a MongoDB
connectionMongo();
app.use(express.json());

// Uso de CORS
app.use(cors());

// Escuchar el servidor
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en http://localhost: ${port}` )
});