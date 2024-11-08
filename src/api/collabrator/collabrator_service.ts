import { Db } from "mongodb";
import {IUser} from "../../model/user_schema";
import { COL } from "../../constants/constant";


const create=async(
    db:Db,
    users:IUser[],
    workspaceId:string

):Promise<any>=>{

   const data= users.forEach(async(user:IUser)=>{
    const userExist=await db.collection(COL.collabrator).findOne({
        userId:user._id,
        workspaceId:workspaceId

    });
    if(!userExist){
        await db.collection(COL.collabrator).insertOne(
           { 
            userId:user._id,
            workspaceId:workspaceId
        }

        )
    }
   });
   return data;
    

}


const remove=async(
    db:Db,
    users:IUser[],
    workspaceId:string

):Promise<any>=>{
    users.forEach(async(user:IUser)=>{
        const userExist=await db.collection(COL.collabrator).findOne({
            userId:user._id,
            workspaceId:workspaceId

        })
        if(userExist){
            await db.collection(COL.collabrator).deleteOne({
                userId:user._id,
                workspaceId:workspaceId

            })
        }
    })

}

export default {
    create,
    remove
}