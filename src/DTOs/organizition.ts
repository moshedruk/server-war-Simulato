
export interface organizitionDTO{
    name: string;
    resources: {
        name: string;
        amount: number;
    }[];
    budget: number;    
}