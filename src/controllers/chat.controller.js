import { Chat } from '../models/chat.models.js';

const createChat = async (req, res) => {
    try {
        const { participants } = req.body;

        if (!participants || participants.length < 2) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Se requieren al menos 2 participantes"
            });
        }

        const newChat = new Chat({ participants });
        await newChat.save();

        res.status(201).json({
            success: true,
            data: newChat,
            message: "Chat creado exitosamente"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: `Error al crear el chat: ${error.message}`
        });
    }
};

const getUserChats = async (req, res) => {
    try {
        const chats = await Chat.find({ participants: { $in: [req.params.userId] } })
            .populate('participants', 'username email');

        res.status(200).json({
            success: true,
            data: chats,
            message: "Chats obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: `Error al obtener chats: ${error.message}`
        });
    }
};

export { createChat, getUserChats };