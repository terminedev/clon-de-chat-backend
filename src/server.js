import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config';

import { userRouter } from "./routes/user.route.js";
import { chatRouter } from "./routes/chat.route.js";
import { messageRouter } from "./routes/message.route.js";
import connectDB from "./config/connectDB.js";


const connectMongoDb = async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error(error);
    }
};

const server = express();
const PORT = process.env.PORT || 4000;

//middlewares
server.use(cors())
server.use(express.json());

server.use('/usuarios', userRouter);
server.use('/chats', chatRouter);
server.use('/mensajes', messageRouter);


server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))

server.get('/', (req, res) => res.send(`Funciona el port: ${PORT}`));

connectMongoDb();

// package ==> npm init -y

