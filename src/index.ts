import express from "express";
import { PORT } from "./config/config";
import router from "./routes";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notion',router);

app.listen(PORT,()=>{
    console.log("connected to backend");
})