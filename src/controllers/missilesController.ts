

// export const getmissiles = async (req:Request<IloginDto>, res:Response) => {
//     try {
//         const user = await getmissilesService(req.body);
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(401).json((error as Error).message);
        
//     }
// }

// export const getorganization = async(req:Request,res:Response)=>{
//     try{
//         console.log(req.body)
//        const newUser =  await getorganizationService(req.body)  
//        // need token use here!     
//        res.status(201).json({user: newUser,msg:'User created successfully'});       
//     }catch(error){
//         res.status(400).json((error as Error).message);       
//     }
// }