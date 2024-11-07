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



export default{
    create
}