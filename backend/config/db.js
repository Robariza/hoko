// Importaciones
import mongoose from 'mongoose';

const connectionMongo = async ()=>{
    await mongoose.connect(process.env.CONECTION_DB, {});
    try{
        console.log('Conexión exitosa a la DB')
    }catch(error){
        console.error('Conexión fallida:', error)
    }
};

export default connectionMongo;