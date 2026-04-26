import { Router } from 'express';
import { createChat, getUserChats } from '../controllers/chat.controller.js';


const chatRouter = Router();

chatRouter.post('/chats/crear', createChat);
chatRouter.get('/chats', getUserChats);

export { chatRouter };