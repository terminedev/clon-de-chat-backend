import { Router } from 'express';

const userRouter = Router();

//http://localhost:7000/chats

userRouter.post('/chats/crear', createChat);
userRouter.get('/chats', getChats);

export { userRouter };