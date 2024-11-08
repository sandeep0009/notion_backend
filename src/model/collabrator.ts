import mongoose, { Document,Schema, Types } from "mongoose";

export interface IColabrator extends Document{
    workspaceId:Types.ObjectId; 
    userId:Types.ObjectId; 
}


const collabratorSchema=new Schema<IColabrator>({
    workspaceId: {
        type: Schema.Types.ObjectId,
        ref: 'Workspace',  
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Workspace',  
        required: true
    },


},{timestamps:true})

export default mongoose.model<IColabrator>('Colabrator', collabratorSchema);