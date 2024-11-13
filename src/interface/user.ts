import mongoose, { Types } from "mongoose";
import { Iorganizition } from "./organizition";

export interface Iuser extends mongoose.Document {
    username: string;
    password: string;
    organization: Iorganizition;
    location?: string | null;
}