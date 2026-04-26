import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.delete('/:id', deleteUser);

export { userRouter };