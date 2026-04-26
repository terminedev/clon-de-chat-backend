import { Router } from 'express';

const messageRouter = Router();

//http://localhost:7000/mensajes

messageRouter.post('/mensajes', sendMessage);
messageRouter.get('/mensajes', getMessage);

export { messageRouter };