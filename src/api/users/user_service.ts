import { Response } from "express";
import { Db } from "mongodb";
import { COL } from "../../constants/constant";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../../config/config";


const create=async(
    db:Db,
    body:any
):Promise<any>=>{
    const {firstName,lastName,email,password}=body;
    if(!(firstName || lastName || email || password) ){
        throw  {
            status:400,
            error:"please provide all the fileds"
        }
    }
    const userExist=await db.collection(COL.users).findOne({email});

    if(userExist){
        throw{
            status:404,
            error:"User already exist"
        }
    }

    const hashPassword=await bcrypt.hash(password,10);

    const newUser=await db.collection(COL.users).insertOne(
        {
            firstName,
            lastName,
            email,
            password:hashPassword
        });

    return newUser
}



const login=async(
    db:Db,
    body:any
):Promise<any>=>{
    const {email,password}=body;

    if(!(email || password)){
        throw{
            status:400,
            error:"please provide all the fields"
        }
    }

    const userExist=await db.collection(COL.users).findOne({email});
    if(!userExist){
        throw{
            status:404,
            error:"wrong credentials"
        }
    }
    const checkPassowrd=await bcrypt.compare(password,userExist.password);

    if(!checkPassowrd){
        throw{
            status:404,
            error:"wrong credentials"
        }
    }

    const token=await jwt.sign({id:userExist._id},JWT_SECRET,{expiresIn:"5hr"});

    return token;
}

export default {
    create,
    login
}