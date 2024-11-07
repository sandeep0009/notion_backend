
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
        const data=await service.create(db,req.body);
        return res.status(201).send({message:MSG.create,data})
        
    } catch (e) {
        next(e)

        
    }
}

