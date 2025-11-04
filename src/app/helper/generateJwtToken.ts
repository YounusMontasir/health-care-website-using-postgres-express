import jwt, { Secret, SignOptions } from "jsonwebtoken";
const generateToken = (payload: object, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn
     } as SignOptions
    ) 
    return token;
}

export const JwtHelper = {
    generateToken
}