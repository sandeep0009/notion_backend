import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: Schema.Types.String,
            required: true
        },
        lastName: {
            type: Schema.Types.String,
            required: true
        },
        email: {
            type: Schema.Types.String,
            required: true,
            unique: true
        },
        password: {
            type: Schema.Types.String,
            required: true
        }
    },
    { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
