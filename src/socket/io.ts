import { Socket } from "socket.io";
import { io } from '../../app';
import { createEvent, getEvent } from "../services/eventsService";
import { getspeedforRocket } from "../services/missiles";


export const handleSocketConnection = (client:Socket) => {
    let time:number
    console.log(`[socket.io] New Connection ${client.id}`)
    client.on("disconnect", ()=>{
        console.log("Bye bye user")
    })
    client.on("newevent",async(event)=>{
        console.log("[NEW VOTE] has accured in the system",event)
        try {
            createEvent(event)   
             time = getspeedforRocket(event.namerocket) 
            const e = await getEvent(event.nameattack) 
            console.log(e,"gggggggggggg")
            io.emit("timerocket",e)       
        } catch (error) {
            
        }       
        // go tell all other connected clients to re-render their data        
        
    })
};