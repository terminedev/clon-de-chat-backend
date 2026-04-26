import { Chat } from '../models/chat.models.js';

const createChat = async (req, res) => {
    try {
        const { participants } = req.body;
        if (!participants || participants.length < 2) {
            return res.status(400).json({ message: "Se requieren al menos 2 participantes" });
        }

        const newChat = new Chat({ participants });
        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el chat", error: error.message });
    }
};

const getUserChats = async (req, res) => {
    try {
        const chats = await Chat.find({ participants: { $in: [req.params.userId] } })
            .populate('participants', 'username email');
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener chats", error: error.message });
    }
};

export { createChat, getUserChats };

