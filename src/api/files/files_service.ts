import { Db } from "mongodb";
import { COL } from "../../constants/constant";


const create=async(
    db:Db,
    body:any
):Promise<any>=>{
    const{workspaceId,folderId}=body;
    
    const workspaceExist=await db.collection(COL.workspace).findOne({workspaceId});
    const folderExist=await db.collection(COL.folder).findOne({folderId});

    if(!workspaceExist){
        throw{
            status:404,
            error:"Workspace doesnt exist"
        }
    }

    if(!folderExist){
        throw{
            status:404,
            error:"folder doesn't exist"
        }
    }

    const data=await db.collection(COL.file).insertOne({
        body,
        workspaceId:workspaceId,
        folderId:folderId

    })
    return data;
}


const find=async(
    db:Db,
    folderId:string
):Promise<any>=>{
    if(!folderId)return;
    const data=await db.collection(COL.file)
    .find({folderId})
    .sort({createAt:1})
    .toArray()

    return data;
}


const findById=async(
    db:Db,
    fileId:string
):Promise<any>=>{
    if(!fileId)return;
    const data=await db.collection(COL.file)
    .find({fileId})
   

    return data;
}



const remove=async(
    db:Db,
    fileId:string
):Promise<any>=>{
    if(!fileId)return;
    await db.collection(COL.file)
    .deleteOne({fileId})

}
export default{
    create,
    find,
    findById,
    remove
}