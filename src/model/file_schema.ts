import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IFile extends Document {
    workspaceId: Types.ObjectId; 
    folderId:Types.ObjectId,
    iconId:string
    title: string; 
    data: any;  
    inTrash: boolean;  
    bannerUrl: string;
}

const fileSchema = new Schema<IFile>(
    {
        workspaceId: {
            type: Schema.Types.ObjectId,
            ref: 'Workspace',  
            required: true
        },
        folderId: {
            type: Schema.Types.ObjectId,
            ref: 'Folder',  
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

export default mongoose.model<IFile>('Folder', fileSchema);
