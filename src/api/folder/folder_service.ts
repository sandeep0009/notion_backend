import { Db } from "mongodb";
import { COL } from "../../constants/constant";
import { error } from "console";



const create=async(
    db:Db,
    body:any
):Promise<any>=>{
    const {workspaceId}=body;
    if(!workspaceId)return;
    const workspaceExist=await db.collection(COL.workspace).findOne({workspaceId});
    if (!workspaceExist){
        throw{
            status:404,
            error:"workspace doesn't exist"
        }
    }
    const data=await db.collection(COL.folder).insertOne({
        body,
        workspaceId
    })

    return data;
}

export default{
    create
}