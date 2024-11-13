import { registerDTO } from "../DTOs/register";
import OrganizitionModel from "../models/organizition";
import UserModle from "../models/user";
import bcrypt from "bcrypt";


export const createUserService = async (user: registerDTO): Promise<registerDTO| any> => {
    try {
        const { username,password ,organization_id, ...the_rest_of_the_things} = user
        const Organizitionmodel = await OrganizitionModel.findOne({_id:organization_id}).lean()
        
        
        const hashp = await bcrypt.hash(password, 10)
        
        const dbUser = new UserModle({
            username,
            password:hashp,
            organization:Organizitionmodel
           ...the_rest_of_the_things
        })
        
        await dbUser.save()        
        console.log(user)        
        return dbUser;
    } catch (err) {
        console.log(err);
        throw err
    }
}