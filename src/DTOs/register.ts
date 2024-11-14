import {location} from '../enum/enumLocations';


export interface registerDTO{
    username: string;
    password: string;
    organization_name: string;       
    location?: string | null;
    
}