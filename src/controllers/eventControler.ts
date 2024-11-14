

import { getEvent } from "../services/eventsService";
import { Missileinventorychange } from "../services/missiles";
import { Request, Response } from "express";

interface changeinventory{
    nameattack: string
    namerocket: string
}
export const getevent = async (req:Request<changeinventory>, res:Response) => {
    try {
        const user = await getEvent(req.body.nameattack);
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}
