import { Missileinventorychange } from "../services/missiles";
import { Request, Response } from "express";

interface changeinventory{
    name: string
    namerocket: string
}
export const changeinventory = async (req:Request<changeinventory>, res:Response) => {
    try {
        const user = await Missileinventorychange(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}

// export const getorganization = async(req:Request,res:Response)=>{
//     try{
//         console.log(req.body)
//        const newUser =  await getorganizationService(req.body)  
//        // need token use here!     
//        res.status(201).json({user: newUser,msg:'User created successfully'});       
//     }catch(error){
//         res.status(400).json((error as Error).message);       
//     }
// }