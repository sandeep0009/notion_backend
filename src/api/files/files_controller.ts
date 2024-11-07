import { NextFunction, Request, Response } from "express";
import service from "./files_service";


export const create=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const{db}=req.app.local;
        const data=await service.create(db,req.body);
        return res.status(201).send({message:"created successfully",data});
        
    } catch (e) {
        next(e)
        
    }
}