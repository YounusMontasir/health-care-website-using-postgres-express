import jwt, { Secret, SignOptions } from "jsonwebtoken";
const generateToken = (payload: object, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn
     } as SignOptions
    ) 
    return token;
}

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret);
    // return verifiedToken;
}

export const JwtHelper = {
    generateToken,
    verifyToken
}