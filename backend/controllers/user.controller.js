// Importa el modelo de usuario.
import { userModel } from "../models/user.model.js";

// Función para obtener todos los usuarios.
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find(); // Obtiene todos los usuarios de la base de datos.
        res.status(200).json(users); // Devuelve una respuesta con los usuarios encontrados.
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

// Función para crear un nuevo usuario.
export const createUser = async (req, res) => {
    const { name, email, password, role } = req.body; // Desestructura los datos del cuerpo de la solicitud.

    const newUser = new userModel({ name, email, password, role }); // Crea una nueva instancia de usuario.

    try {
        const savedUser = await newUser.save(); // Guarda el nuevo usuario en la base de datos.
        res.status(201).json(savedUser); // Devuelve una respuesta con el usuario creado.
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

// Función para actualizar un usuario existente.
export const updateUser = async (req, res) => {
    const { id } = req.params; // Obtiene el ID del usuario de los parámetros de la solicitud.
    const updates = req.body; // Obtiene los datos que se quieren actualizar.

    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true }); // Actualiza el usuario en la base de datos.
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser); // Devuelve el usuario actualizado.
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};

// Función para eliminar un usuario.
export const deleteUser = async (req, res) => {
    const { id } = req.params; // Obtiene el ID del usuario de los parámetros de la solicitud.

    try {
        const deletedUser = await userModel.findByIdAndDelete(id); // Elimina el usuario de la base de datos.
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado con éxito' }); // Devuelve un mensaje de éxito.
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
};

// Función para obtener un usuario por ID.
export const getUserById = async (req, res) => {
    const { id } = req.params; // Obtiene el ID del usuario de los parámetros de la solicitud.

    try {
        const user = await userModel.findById(id); // Busca el usuario en la base de datos.
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user); // Devuelve el usuario encontrado.
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};
