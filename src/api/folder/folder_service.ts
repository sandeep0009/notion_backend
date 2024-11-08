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


const find=async(
    db:Db,
    workspaceId:string
):Promise<any>=>{
    if(!workspaceId)return;
    const data=await db.collection(COL.folder)
                        .find({workspaceId})
                        .sort({createdAt:1})
                        .toArray()

    return data;
    

}


const findById=async(
    db:Db,
    folderId:string

):Promise<any>=>{
    if(!folderId)return;
    const data=await db.collection(COL.folder).findOne({folderId});
    return data;
}


const remove=async(
    db:Db,
    folderId:string

):Promise<any>=>{
    if(!folderId)return;
    const data=await db.collection(COL.folder).deleteOne({folderId});
    return data;
}
export default{
    create,
    find,
    findById,
    remove
}