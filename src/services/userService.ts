import { IloginDto } from "../DTOs/login";
import { registerDTO } from "../DTOs/register";
import OrganizitionModel from "../models/organizition";
import UserModle from "../models/user";
import bcrypt, { compare } from "bcrypt";
import jwt, { JsonWebTokenError } from "jsonwebtoken";


export const userLoginService = async (user: IloginDto) => {
    try {
      const userFromDatabase = await UserModle.findOne({username: user.username}).lean();
      if (!userFromDatabase) throw new Error("user not found");
      const match = await compare(user.password, userFromDatabase.password);
      if (!match) throw new Error("wrong password");
      // gen token
      const token = await jwt.sign(
        {
          user_id: userFromDatabase._id,          
          username: userFromDatabase.username,
        },
        process.env.secretKey!,
        {
          expiresIn: "10m",
        }
      );
      return { ...userFromDatabase, token, password: "*******" };
    } catch (err) {
      throw err;
    }
  };




export const createUserService = async (user: registerDTO): Promise<registerDTO | any> => {
    try {
        const { username, password, organization_name, ...the_rest_of_the_things } = user
        const Organizitionmodel = await OrganizitionModel.findOne({ name: organization_name }).lean()
        if (!Organizitionmodel) {
            throw new Error("Organization not found")
        }
        const hashp = await bcrypt.hash(password, 10)
        const dbUser = new UserModle({
            username,
            password: hashp,
            organization: Organizitionmodel,
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

export const getuser = async(user: registerDTO)=> {
  try {
    const { username } = user
    const userFromDatabase = await UserModle.findOne({ username: username }).lean();
    if (!userFromDatabase) throw new Error("user not found");
    return userFromDatabase;
  } catch (err) {
    throw err;
  }
}