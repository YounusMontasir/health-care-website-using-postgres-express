
import { Request } from "express";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs"
import { UserStatus } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JwtHelper } from "../../helper/generateJwtToken";
import config from "../../../config";
const login = async(payload: {email: string, password: string}) => {
    console.log(payload.password);
    
    const isUserExist = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })

    
 
     const correctPassword = await bcrypt.compare(payload.password, isUserExist.password);
     
     if(!correctPassword){
        throw new Error('Password is incorrect')
     }

     const accessToken = JwtHelper.generateToken(
        {email: isUserExist.email, role:isUserExist.role}, 
        config.jwt_secret as string, 
        '1h'
        )
     const refreshToken = JwtHelper.generateToken(
        {email: isUserExist.email, role:isUserExist.role}, 
        config.jwt_secret as string, 
        '90d'
        )
    


    return {
        accessToken,
        refreshToken,
        needPasswordChange: isUserExist.needPasswordChange
    }

}

export const AuthService = {
    login
}