import { Router } from 'express';

const userRouter = Router();

//http://localhost:7000/usuarios

userRouter.post('/usuarios/crear', createUser);
userRouter.get('/usuarios', getUsers);
userRouter.delete('/usuarios/borrar/:id', deleteUser);

export { userRouter };