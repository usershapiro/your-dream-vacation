import { NextFunction, Request, Response } from "express";
import appConfig from "../2-utils/appConfig";
import logger from "../2-utils/logger";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    console.log(err);

    const status = err.status || 500;
//always log server errors:
if(status===500) {
    logger.logError("catchAll error",err)
}


const message = appConfig.isDevelopment ? err.message : "Some error occourd please try again!"
    response.status(status).send(err.message);
}

export default catchAll;
