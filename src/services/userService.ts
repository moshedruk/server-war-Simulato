import { registerDTO } from "../DTOs/register";
import UserModle from "../models/user";


export const createUserService = async (user: registerDTO): Promise<registerDTO> => {
    try {
        const {_id, username,password ,organization, ...the_rest_of_the_things} = user
        const dbUser = new UserModle({
            username,
            password,
            organization,
           ...the_rest_of_the_things
        })
        const organizitionUser = await UserModle.findOne({ _id: _id }).populate('organization');
        await dbUser.save()        
        console.log(user)        
        return organizitionUser;
    } catch (err) {
        console.log(err);
        throw err
    }
}