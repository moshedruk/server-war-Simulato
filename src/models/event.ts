

import mongoose from "mongoose";

import { Ievents } from "../interface/events";


const eventSchema = new mongoose.Schema<Ievents>({
    nameattack: { type: String,  },
    location: { type: String,  },
    namerocket: { type: String,  },
    status: { type: String },
      
});
// Create a Model. and export it
const eventModel: mongoose.Model<Ievents> = mongoose.model('events', eventSchema)
export default eventModel