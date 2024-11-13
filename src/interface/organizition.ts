import mongoose from "mongoose";

export interface Iorganizition extends mongoose.Document {
    name: string;
    resources: {
        name: string;
        amount: number;
    }[];
    budget: number;
}