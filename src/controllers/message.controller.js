import { Message } from '../models/message.models.js';

const sendMessage = async (req, res) => {
    try {
        const { chatId, senderId, content } = req.body;

        const newMessage = new Message({ chatId, senderId, content });
        await newMessage.save();

        res.status(201).json({
            success: true,
            data: newMessage,
            message: "Mensaje enviado correctamente"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: `Error al enviar mensaje: ${error.message}`
        });
    }
};

const getChatHistory = async (req, res) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId })
            .sort({ createdAt: 1 })
            .populate('senderId', 'username');

        res.status(200).json({
            success: true,
            data: messages,
            message: "Historial de chat obtenido correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: `Error al obtener el historial: ${error.message}`
        });
    }
};

export { sendMessage, getChatHistory };