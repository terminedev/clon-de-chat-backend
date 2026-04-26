import { User } from '../models/user.models.js';

const createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const newUser = new User({ username, email });
        await newUser.save();

        res.status(201).json({
            success: true,
            data: newUser,
            message: "Usuario creado exitosamente"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: `Error al crear usuario: ${error.message}`
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users,
            message: "Usuarios obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: `Error al obtener usuarios: ${error.message}`
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: deletedUser,
            message: "Usuario eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: `Error al eliminar usuario: ${error.message}`
        });
    }
};

export { createUser, getUsers, deleteUser };