

import mongoose from "mongoose";

import { Ievents } from "../interface/events";


const eventSchema = new mongoose.Schema<Ievents>({
    username: { type: String, required: true },
    location: { type: String, required: true },
    namerocket: { type: String, required: true },
    status: { type: String, required: true },
      
});
// Create a Model. and export it
const eventModel: mongoose.Model<Ievents> = mongoose.model('events', eventSchema)
export default eventModel