import { organizitionDTO } from "../DTOs/organizition";
import OrganizitionModel from "../models/organizition";


export const createorganizitionService = async (orgs: organizitionDTO[]): Promise<organizitionDTO[]> => {
    try {
        orgs.forEach(async (org)  => {
            const dbneworg = new OrganizitionModel(org);
            await dbneworg.save()
        });
        // for (const org of orgs) {
        //     const dbneworg = new OrganizitionModel(org);
        //     await dbneworg.save()
        // }
        console.log(orgs)        
        return orgs;
    } catch (err) {
        console.log(err);
        throw err
    }
}