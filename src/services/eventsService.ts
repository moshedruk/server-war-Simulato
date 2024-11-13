import { IeventsDTO } from "../DTOs/event";
import eventModel from "../models/event";


export const updeteStutusforRocket = async (namerocket:string) => {
    try {
        const rocket = await eventModel.findOneAndUpdate(
            { name: namerocket },
            { status: "inactive" },
            { new: true }
        );
        if (!rocket) {
            throw new Error("Rocket not found");
        }
        return rocket;
    } catch (error ) {
        throw error;
    }
}


export const createEvent = async (newEvent:IeventsDTO) => {
    try {
        const {username,location,namerocket} = newEvent
        const event = new eventModel({
            username,
            location,
            namerocket,
            status:"active"            
        })
        await event.save();        
        return event;
    } catch (error ) {
        throw error
    }
}