import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";
import { NonAdminError } from "../4-models/error-model";

async function blockNonAdmin(request: Request, response: Response, next: NextFunction) {
    try {
        const user = request.body
        const isAdmin = await cyber.isAdmin(user);
        if(isAdmin) throw new  NonAdminError ("Admin Only Access");
        next();
    }
    catch(err: any) {
        next(err);
    }
    
}

export default blockNonAdmin;