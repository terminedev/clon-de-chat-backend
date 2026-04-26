import { Router } from 'express';
import { getChatHistory, sendMessage } from '../controllers/message.controller';

const messageRouter = Router();

//http://localhost:7000/mensajes

messageRouter.post('/mensajes', sendMessage);
messageRouter.get('/mensajes', getChatHistory);

export { messageRouter };