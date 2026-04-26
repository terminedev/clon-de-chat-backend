import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users', getUsers);
userRouter.delete('/users/:id', deleteUser);

export { userRouter };