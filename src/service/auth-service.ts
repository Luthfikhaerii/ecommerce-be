import { PayloadJWT } from "../models/auth-model";
import jwt from "jsonwebtoken"

export class AuthService{
    static createToken(payload:PayloadJWT){
        const token = jwt.sign(payload,process.env.JWT_SECRET_KEY!,{expiresIn:"6h"})
        return token
    }
    static validateToken(token:string){
        if(!token){
            throw new Error("Token is not exist!")
        }

        jwt.verify(token,process.env.JWT_SECRET_KEY!,(err,payload)=>{
            if(err){
                throw new Error("Token is not valid")
            }
            return payload
        })
    }
}