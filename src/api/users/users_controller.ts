
import { NextFunction, Request, Response } from "express";
import { MSG } from "../../constants/constant";
import service from "./user_service"

export const create=async(
    req:Request | any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.locals;
        const data=await service.create(db,req.body);
        res.status(201).send({message:MSG.create,data});            
    } catch (e) {
        next(e)      
    }
}


export const login=async(
    req:Request|any,
    res:Response,
    next:NextFunction

):Promise<any>=>{
    try {
        const {db}=req.app.locals;
        const data=await service.login(db,req.body);
        return res.status(200).send({message:"logged in",data});
        
    } catch (error) {
        
    }

}