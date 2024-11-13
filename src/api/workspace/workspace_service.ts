import { Db } from "mongodb";
import { COL } from "../../constants/constant";

const create=async(
    db:Db,
    body:any,
    id:string
):Promise<any>=>{
    const data=db.collection(COL.workspace).insertOne({
        body,
        workspaceOwner:id
    })
    return data;   

}

const find=async(
    workspaceId:string,
    db:Db
):Promise<any>=>{
    if(!workspaceId)return;
    const data=await db.collection(COL.workspace).findOne({workspaceId});
    if(!data){
        throw{
            status:404,
            error:"doesn't exist"
        }
    }
    return data.toArray();
}

const remove=async(
    workspaceId:string,
    db:Db
):Promise<any>=>{
    if(!workspaceId)return;
    await db.collection(COL.workspace).deleteOne({workspaceId});
}


const update=async(
    workspaceId:string,
    body:any,
    db:Db
):Promise<any>=>{
    if (!workspaceId)return
    const updateOperation={
        $set:body
    }
    const data=await db.collection(COL.workspace).findOneAndUpdate({workspaceId},updateOperation);
    return data;
}



export default {
    create,
    find,
    remove,
    update
}