import { NextFunction, Request, Response } from "express";
import { RouteNotFoundError } from "../4-models/error-model";
import striptags from "striptags";

function sanitize(request: Request, response: Response, next: NextFunction) {

for(const prop in  request.body){
  if(typeof request[prop]==="string"){
    request.body[prop] = striptags(request.body[prop])
  }
}

    next();
}

export default sanitize
