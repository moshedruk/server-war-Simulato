import { organizitionDTO } from "../DTOs/organizition";
import { Request, Response } from "express";
import { createorganizitionService, getorganizitionService } from "../services/organizitionService";




export const createorganizition  = async (req:Request<organizitionDTO[]>, res:Response) => {
    try {
        const organizitions = await createorganizitionService(req.body);
        res.status(200).json(organizitions)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}

export const getorganizition  = async (req:Request, res:Response) => {
    try {
        const allorganizitions = await getorganizitionService();
        res.status(200).json(allorganizitions)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}