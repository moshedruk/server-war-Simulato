import { Request, Response } from "express";
import { registerDTO } from "../DTOs/register";
import { createUserService, userLoginService } from "../services/userService";
import { IloginDto } from "../DTOs/login";

export const login = async (req:Request<IloginDto>, res:Response) => {
    try {
        const user = await userLoginService(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}

export const createNewUser = async(req:Request<registerDTO>,res:Response)=>{
    try{
        console.log(req.body)
       const newUser =  await createUserService(req.body)  
       // need token use here!     
       res.status(201).json({user: newUser,msg:'User created successfully'});       
    }catch(error){
        res.status(400).json((error as Error).message);       
    }
}