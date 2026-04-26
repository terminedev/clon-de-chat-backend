import { Router } from 'express';
import { getChatHistory, sendMessage } from '../controllers/message.controller.js';

const messageRouter = Router();

messageRouter.post('/mensajes', sendMessage);
messageRouter.get('/mensajes', getChatHistory);

export { messageRouter };