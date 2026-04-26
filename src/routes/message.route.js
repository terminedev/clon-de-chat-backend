import { Router } from 'express';
import { getChatHistory, sendMessage } from '../controllers/message.controller.js';

const messageRouter = Router();

messageRouter.post('/', sendMessage);
messageRouter.get('/:chatId', getChatHistory);

export { messageRouter };