import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import { userRouter } from "./routes/user.route";
import { chatRouter } from "./routes/chat.route";
import { messageRouter } from "./routes/message.route";


const connectMongoDb = async () => { };

const server = express();
const PORT = 7000;

//middlewares
server.use(cors())
server.use(express.json());

server.use('/usuarios', userRouter);
server.use('/chats', chatRouter);
server.use('/mensajes', messageRouter);


server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))

server.get('/', (req, res) => res.send(`Funciona el port: ${PORT}`));


// package ==> npm init -y

