import { organizitionDTO } from "../DTOs/organizition";
import { Request, Response } from "express";
import { createorganizitionService,  getOrganizitionService, getorganizitionServiceByid } from "../services/organizitionService";
import { IgetorganizitionDto } from "../DTOs/getorginiziton";




export const createorganizition  = async (req:Request<organizitionDTO[]>, res:Response) => {
    try {
        const organizitions = await createorganizitionService(req.body);
        res.status(200).json(organizitions)
    } catch (error) {
        res.status(401).json((error as Error).message);        
    }
}

export const getorganizition  = async (req:Request<IgetorganizitionDto>, res:Response) => {
    try {        
        const allorganizitions = await getOrganizitionService(req.body);
        res.status(200).json(allorganizitions)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}