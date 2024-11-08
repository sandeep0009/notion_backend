import { NextFunction, Request, Response } from "express";
import service from "../collabrator/collabrator_service"

export const create=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.local;
        const{users,workspaceId}=req.body;
        const data=await service.create(db,users,workspaceId);
        return res.status(200).send({message:"created successfully",data});
        
    } catch (e) {
        next(e)
        
    }
}


export const remove=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.local;
        const{users,workspaceId}=req.body;
        await service.remove(db,users,workspaceId);
        return res.status(200).send({message:"deleted successfully"});
        
    } catch (e) {
        next(e)
        
    }
}