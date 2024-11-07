import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../config/config";
import jwt from "jsonwebtoken"

export const verifyAuth=async(
    req:Request|any,
    res:Response,
    next:NextFunction
):Promise<any>=>{
    try {
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(401).json({ message: "Unauthorized access"});

        }

        const token=authHeader.spilt(" ")[1];
        if(!token){
           return res.status(401).json({ message: "token missing"});

        }
        const decode=await jwt.verify(token,JWT_SECRET);
        req.user = decode;
        next();
        
    } catch (e) {
        res.status(401).json({ message: "Unauthorized access"});

        
    }
}