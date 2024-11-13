
import { NextFunction, Request, Response } from "express";
import service from "./workspace_service";
import { MSG } from "../../constants/constant";



export const create=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.locals;
        const id=req.user;
        const data=await service.create(db,req.body,id);
        return res.status(201).send({message:MSG.create,data})
        
    } catch (e) {
        next(e)

        
    }
}

export const find=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.local;
        const {id}=req.params;
        const data=await service.find(db,id);
        return res.status(200).send({message:"all fetched record",data});       
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
        const {id}=req.params;
        const data=await service.remove(db,id);
        return res.status(200).send({message:"deleted successfully"});        
    } catch (e) {
        next(e)
        
    }
}

export const update=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const {db}=req.app.local;
        const {id}=req.params;
        const data=await service.update(db,id,req.body);
        return res.status(200).send({message:"updated successfully",data});        
    } catch (e) {
        next(e)
        
    }
}

