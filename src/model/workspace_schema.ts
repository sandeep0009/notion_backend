import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IWorkspace extends Document {
    workspaceOwner: Types.ObjectId; 
    title: string;
    iconId: string;
    data: any;  
    inTrash: boolean;
    logo: string;
    bannerUrl: string;
}

const workspaceSchema = new Schema<IWorkspace>(
    {
        workspaceOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User',  
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
        logo: {
            type: String
        },
        bannerUrl: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model<IWorkspace>('Workspace', workspaceSchema);
