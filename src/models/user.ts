
import mongoose from 'mongoose';
import { Iuser } from '../interface/user';
import { Iorganizition } from '../interface/organizition';


// 1. Create an interface representing a document in MongoDB.

// [Iuser] is an interface

// 2. Create a Schema corresponding to the document interface.
// export interface Iorganizition extends mongoose.Document {
//     name: string;
//     resources: {
//         name: string;
//         amount: number;
//     }[];
//     budget: number;
// }

// export interface Iuser extends mongoose.Document {
//     username: string;
//     password: string;
//     organization: Iorganizition;
//     location?: string | null;
// }


const userSchema = new mongoose.Schema<Iuser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },    
    organization: {        
        name: { type: String, },
        resources: [{
            name: { type: String, },
            amount: { type: Number, },
            }],
        budget: { type: Number, }
    },
    location: { type: String, default: false }  // Optional field
});
// 3. Create a Model. and export
const UserModle: mongoose.Model<Iuser> = mongoose.model('users', userSchema)
export default UserModle