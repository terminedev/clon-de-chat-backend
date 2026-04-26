import { Router } from 'express';

const userRouter = Router();

//http://localhost:7000/mensajes

userRouter.post('/mensajes', sendMessage);
userRouter.get('/mensajes', getMessage);

export { userRouter };