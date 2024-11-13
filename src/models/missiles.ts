import mongoose from "mongoose";
import { Imissiles } from "../interface/missiles";


const missileSchema = new mongoose.Schema<Imissiles>({
    name: {type: String,required: true},
    description: String,
    speed: Number,
    intercepts: [String],
    price: Number    
});
// Create a Model. and export it
const missileModel: mongoose.Model<Imissiles> = mongoose.model('missile', missileSchema)
export default missileModel