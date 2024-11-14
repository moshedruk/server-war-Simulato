import {location} from '../enum/enumLocations';


export interface registerDTO{
    username: string;
    password: string;
    organization_id: string;       
    location?: string | null;
    
}