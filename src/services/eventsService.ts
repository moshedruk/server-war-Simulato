import { IeventsDTO } from "../DTOs/event";
import eventModel from "../models/event";


export const updeteStutusforRocket = async (namerocket:string,newstatus:string) => {
    try {
        const rocket = await eventModel.findOneAndUpdate(
            { name: namerocket },
            { status: "false" },
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
        const {nameattack,location,namerocket} = newEvent
        const event = new eventModel({
            nameattack,
            location:location,
            namerocket ,          
            status:"launched"            
        })
        await event.save();        
        return event;
    } catch (error ) {
        throw error
    }
}
export const getEvent = async (nameEvent:string) => {
    try {
        const event = await eventModel.find({
            nameattack: nameEvent });        
        if (!event) {
            throw new Error("Event not found");
        }       
        return event;
    } catch (error ) {
        throw error
    }
}