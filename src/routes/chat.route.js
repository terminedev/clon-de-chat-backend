import { Router } from 'express';

const chatRouter = Router();

//http://localhost:7000/chats

chatRouter.post('/chats/crear', createChat);
chatRouter.get('/chats', getChats);

export { chatRouter };