import mongoose from "mongoose";
import { DB_URI } from "../config/config";


export const connectDatabase=async()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("connected to mongodb");
        
    } catch (error) {
        console.log("error in connection to mongoose");
        
    }
}