import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/usuarios/crear', createUser);
userRouter.get('/usuarios', getUsers);
userRouter.delete('/usuarios/borrar/:id', deleteUser);

export { userRouter };