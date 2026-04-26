import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/user.controller';

const userRouter = Router();

//http://localhost:7000/usuarios

userRouter.post('/usuarios/crear', createUser);
userRouter.get('/usuarios', getUsers);
userRouter.delete('/usuarios/borrar/:id', deleteUser);

export { userRouter };