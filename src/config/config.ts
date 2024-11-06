
import dotenv from "dotenv"
import path = require("path")
dotenv.config({path:path.join(__dirname,"../../.env")});
export const PORT=process.env.PORT || 8000;
export const DB_URI=process.env.DB_URI ??"";
export const JWT_SECRET=process.env.JWT_SECRET??"";
export const NODE_ENV=process.env.NODE_ENV || "local";