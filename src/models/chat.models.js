import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    // Un chat tiene un arreglo de participantes (referencias a User)
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }]
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
export { Chat };