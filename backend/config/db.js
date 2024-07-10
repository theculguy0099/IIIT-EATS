import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
    await mongoose.connect('process.env.MONGODB_URI').then(()=>console.log("database connected"));
}