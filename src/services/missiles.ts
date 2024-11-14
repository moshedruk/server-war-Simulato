import UserModle from "../models/user";
import { missiles } from "../utils/missiles";

interface changeinventory {
    name: string
    rocket: string
}


export const Missileinventorychange = async (rocket: changeinventory) => {
    try {
        // Check if the rocket exists in the database
        const user = await UserModle.findOne({ username: rocket.name });
        if (!user) {
            return {
                status: "ERROR",
                message: "User not found",
            };
        }
        const tempUser = user.organization.resources
        tempUser.map(resource => {
            if (resource.name === rocket.rocket && resource.amount > 0) {
                resource.amount--
            }
        })
        await user.save();
        const timerocket = await getspeedforRocket(rocket.rocket)
        console.log(tempUser)
        return {
            user
        };
    } catch (err) {
        return {
            status: "ERROR",
            err: err as Error,
        };
    }
};

export const getspeedforRocket = (namerocket:string) => {
    let time = 0
    missiles.filter(missile =>{
        if(missile.name===namerocket){
            time = missile.speed
        }
    })
    return time
}
const getinformitionforRocket = async (namerocket:string) => {    
    const inf = missiles.filter(missile =>{
        if(missile.name===namerocket){
            return missile.speed
        }
    })
    return inf
}
const updeteStutusforRocket = async (namerocket:string) => {}