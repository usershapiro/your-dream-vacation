import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";
import { NonAdminError } from "../4-models/error-model";

async function blockNonAdmin(request: Request, response: Response, next: NextFunction) {
    try{
        const isAdmin = await cyber.isAdmin(request)
        if(!isAdmin) throw new NonAdminError("Sorry! You are not admin!")
        next()
    }catch(err:any){
        next(err)
    }
}

export default blockNonAdmin;