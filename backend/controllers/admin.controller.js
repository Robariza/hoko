// Importa el modelo de administradores desde el archivo donde está definido ('admin.model.js').
import adminModel from "../models/admin.model.js";

// Controlador que obtiene todos los administradores de la base de datos.
export const getAllAdmins = async (req, res) => {
    try {
        // Usa el modelo 'adminModel' para buscar todos los administradores en la base de datos.
        const admins = await adminModel.find();
        
        // Si la operación es exitosa, responde con un estado 200 (OK) y envía los administradores en formato JSON.
        res.status(200).json(admins);
    } catch (error) {
        // Si ocurre un error, responde con un estado 500 (Error del servidor) y un mensaje de error en formato JSON.
        res.status(500).json({ message: 'Error al obtener administradores.' });
    }
};

// Controlador que crea un nuevo administrador en la base de datos.
export const createAdmin = async (req, res) => {
    const { username, password, role } = req.body;

    // Verifica que el nombre de usuario y la contraseña sean proporcionados.
    if (!username || !password) {
        return res.status(400).json({ message: 'El nombre de usuario y la contraseña son requeridos.' });
    }

    try {
        // Crea una nueva instancia del modelo 'adminModel' usando los datos recibidos en 'req.body'.
        const newAdmin = new adminModel({ username, password, role });

        // Guarda el nuevo administrador en la base de datos.
        await newAdmin.save();
        
        // Si la creación es exitosa, responde con un estado 201 (Creado) y el administrador recién creado en formato JSON.
        res.status(201).json(newAdmin);
    } catch (error) {
        // Si ocurre un error al crear el administrador, responde con un estado 500 y un mensaje de error.
        res.status(500).json({ message: 'Error al crear administrador.' });
    }
};

// Controlador que actualiza un administrador existente en la base de datos.
export const updateAdmin = async (req, res) => {
    try {
        // Busca un administrador por su ID y lo actualiza con los datos que se reciben en 'req.body'.
        const admin = await adminModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Si no se encuentra el administrador, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!admin) return res.status(404).json({ message: 'Administrador no encontrado.' });
        
        // Si la actualización es exitosa, responde con el administrador actualizado.
        res.status(200).json(admin);
    } catch (error) {
        // Si ocurre un error en la actualización, responde con un estado 400 (Solicitud incorrecta) y un mensaje de error.
        res.status(400).json({ message: 'Error al actualizar administrador.' });
    }
};

// Controlador que elimina un administrador de la base de datos.
export const deleteAdmin = async (req, res) => {
    try {
        // Busca un administrador por su ID y lo elimina de la base de datos.
        const admin = await adminModel.findByIdAndDelete(req.params.id);
        
        // Si no se encuentra el administrador, responde con un estado 404 (No encontrado) y un mensaje de error.
        if (!admin) return res.status(404).json({ message: 'Administrador no encontrado.' });
        
        // Si la eliminación es exitosa, responde con un estado 200 (OK) y un mensaje de éxito.
        res.status(200).json({ message: 'Administrador eliminado exitosamente.' });
    } catch (error) {
        // Si ocurre un error en la eliminación, responde con un estado 500 (Error del servidor) y un mensaje de error.
        res.status(500).json({ message: 'Error al eliminar administrador.' });
    }
};
