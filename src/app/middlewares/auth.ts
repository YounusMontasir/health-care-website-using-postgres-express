import  httpStatus  from 'http-status';
import { NextFunction, Request, Response } from "express";
import ApiError from "../erorrs/ApiError";

const auth = (...roles: string[]) => {
    return async(req: Request, res: Response, next: NextFunction) =>{
        try {
            const token = req.headers.authorization

            if(!token){
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not logged in! Please log in to get access.");
            }
        } catch (error) {
            
        }
    }

}