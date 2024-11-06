import express from "express";
import { PORT } from "./config/config";
import router from "./routes";
import { connectDatabase } from "./db/database";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();
app.use(router);

app.listen(PORT,()=>{
    console.log("connected to backend");
})