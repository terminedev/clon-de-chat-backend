import { Router } from 'express';
import { createChat, getUserChats } from '../controllers/chat.controller.js';


const chatRouter = Router();

chatRouter.post('/', createChat);
chatRouter.get('/:userId', getUserChats);

export { chatRouter };