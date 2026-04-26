import { Message } from '../models/message.models';

const sendMessage = async (req, res) => {
    try {
        const { chatId, senderId, content } = req.body;

        const newMessage = new Message({ chatId, senderId, content });
        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: "Error al enviar mensaje", error: error.message });
    }
};

const getChatHistory = async (req, res) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId })
            .sort({ createdAt: 1 })
            .populate('senderId', 'username');
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el historial", error: error.message });
    }
};

export { sendMessage, getChatHistory };

