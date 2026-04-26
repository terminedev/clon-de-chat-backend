import mongoose from 'mongoose';

const MONGODB_URI = '';

const connetDB = async () => {
    if (!MONGODB_URI) console.warn('There is no URL for the database')
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('BD ✓')
    } catch (error) {
        console.error('BD ⨉', error)
    }
};

export default connectDB;