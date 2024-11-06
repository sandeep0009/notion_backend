import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IFolder extends Document {
    workspaceId: Types.ObjectId; 
    iconId:string
    title: string; 
    data: any;  
    inTrash: boolean;  
    bannerUrl: string;
}

const folderSchema = new Schema<IFolder>(
    {
        workspaceId: {
            type: Schema.Types.ObjectId,
            ref: 'Workspace',  
            required: true
        },
        title: {
            type: String,
            required: true
        },
        iconId: {
            type: String,
            required: true
        },
    
        data: {
            type: Schema.Types.Mixed,  
            default: {}
        },
        inTrash: {
            type: Boolean,
            default: false  
        },
       
        bannerUrl: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model<IFolder>('Folder', folderSchema);
