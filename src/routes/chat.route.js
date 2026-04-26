import { Router } from 'express';
import { createChat, getUserChats } from '../controllers/chat.controller.js';


const chatRouter = Router();

chatRouter.post('/chats', createChat);
chatRouter.get('/chats/:userId', getUserChats);

export { chatRouter };