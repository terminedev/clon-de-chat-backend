import { Router } from 'express';
import { getChatHistory, sendMessage } from '../controllers/message.controller.js';

const messageRouter = Router();

messageRouter.post('/messages', sendMessage);
messageRouter.get('/messages/:chatId', getChatHistory);

export { messageRouter };