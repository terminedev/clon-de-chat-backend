import { Router } from 'express';
import { createChat, getUserChats } from '../controllers/chat.controller';


const chatRouter = Router();

//http://localhost:7000/chats

chatRouter.post('/chats/crear', createChat);
chatRouter.get('/chats', getUserChats);

export { chatRouter };