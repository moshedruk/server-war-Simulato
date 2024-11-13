import mongoose from "mongoose";
import { Iorganizition } from "../interface/organizition";


const organizitionschema = new mongoose.Schema<Iorganizition>({
    name: { type: String, required: true },
    resources: [{
        name: { type: String, required: true },
        amount: { type: Number, required: true }
    }],
    budget: { type: Number, required: true }    
});
// Create a Model. and export it
const OrganizitionModel: mongoose.Model<Iorganizition> = mongoose.model('organizations', organizitionschema)
export default OrganizitionModel