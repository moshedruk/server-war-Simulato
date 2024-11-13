
import mongoose from 'mongoose';
import { Iuser } from '../interface/user';


// 1. Create an interface representing a document in MongoDB.

// [Iuser] is an interface

// 2. Create a Schema corresponding to the document interface.

const userSchema = new mongoose.Schema<Iuser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'organizations' },
    location: { type: String, default: false }  // Optional field
});
// 3. Create a Model. and export
const UserModle: mongoose.Model<Iuser> = mongoose.model('users', userSchema)
export default UserModle