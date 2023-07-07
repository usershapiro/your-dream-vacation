import express, { Request, Response,NextFunction } from "express";
import UserModel from "../4-models/user-model";
import authLogic from "../5-logic/auth-logic";
import CredentialsModel from "../4-models/credentials-model";


const router = express.Router();

router.post("/auth/register",async (request: Request, response: Response, next: NextFunction)=>{
    try{
      
       const user = new UserModel(request.body);
       const token = await authLogic.register(user);
       response.status(201).json(token);
    
    
    }
    catch(err:any){
       next(err);
    }

})

router.post("/auth/login",async (request: Request, response: Response, next: NextFunction)=>{
    try{

        const credentials = new CredentialsModel(request.body);
        const token = await authLogic.login(credentials);
        response.json(token);
        
        
    }
    catch(err:any){
        next(err)
    }
})

router.get("/users/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const user = await authLogic.getOneUser(id);
        response.json(user);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;