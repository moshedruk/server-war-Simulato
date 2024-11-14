import { IgetorganizitionDto } from "../DTOs/getorginiziton";
import { organizitionDTO } from "../DTOs/organizition";
import OrganizitionModel from "../models/organizition";


export const createorganizitionService = async (orgs: organizitionDTO[]): Promise<organizitionDTO[]> => {
    try {
        orgs.forEach(async (org)  => {
            const dbneworg = new OrganizitionModel(org);
            await dbneworg.save()
        });        
        console.log(orgs)        
        return orgs;
    } catch (err) {
        console.log(err);
        throw err
    }
}
// export const getorganizitionService = async (): Promise<organizitionDTO[]> => {
//     try {
//         const dbOrgs = await OrganizitionModel.find();        
//         return dbOrgs
//     } catch (err) {
//         console.log(err);
//         throw err
//     }
// }

export const getOrganizitionService = async(name:string) => {
    let res:boolean = false
    Object.values(name).forEach(name => {
        if(name.includes('IDF')){
            res = true
        }
    })
   console.log(res)        
    if(res){
        try {
            return await getidorganizitionIDFService()            
        } catch (err) {
            throw err
        }
    }
    else{
        try {
            return await getidorganizitionattackService()            
        } catch (err) {
            throw err
        }
    }
}


 const getidorganizitionattackService = async (): Promise<organizitionDTO[]> => {
    try {
        const dbOrg = await OrganizitionModel.find();  
        
        const attack =  dbOrg.filter(org =>{
            
            return org.name =='Hezbollah'||org.name =='Hamas'||org.name =='IRGC'||org.name =='Houthis';                  
        })     
        // console.log(attack)
        return attack
    } catch (err) {
        console.log(err);
        throw err
    }
}
 const getidorganizitionIDFService = async (): Promise<organizitionDTO[]> => {
    try {
        const dbOrg = await OrganizitionModel.find();  
        
        const IDfs =  dbOrg.filter(org =>{
            
            return org.name.startsWith('IDF')                  
        })     
        // console.log(IDs)
        return IDfs
    } catch (err) {
        console.log(err);
        throw err
    }
}
export const getorganizitionServiceByid = async (id:string): Promise<organizitionDTO[]> => {
    try {      
       
        const dbOrg = await OrganizitionModel.find({_id:id});        
        return dbOrg
    } catch (err) {
        console.log(err);
        throw err
    }
}

