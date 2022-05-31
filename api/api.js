import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MONGODB.`)
    } catch (error) {
        console.log(error)
    }
}


const PORT = process.env.PORT || 8700

app.listen(PORT, () => {
    connect()
    console.log(`Server running on PORT: ${PORT}`)
})