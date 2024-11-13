import mongoose, { Types } from "mongoose";

export interface Iuser extends mongoose.Document {
    username: string;
    password: string;
    organization: Types.ObjectId | string;
    location?: string | null;
}