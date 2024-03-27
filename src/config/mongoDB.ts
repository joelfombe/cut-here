import { connect } from "mongoose";
import { config } from "dotenv";
config();

export const connectDB = async () => {
    try {
        await connect(process.env.MONGODB!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};