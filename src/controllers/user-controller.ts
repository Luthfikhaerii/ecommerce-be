import { NextFunction, Request, Response } from "express"
import { UserService } from "../service/user-service"
import type { CreateUserRequest, LoginUserRequest } from "../models/user-model"
import { AuthService } from "../service/auth-service"

export class UserController {

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserService.getUsers()
            res.status(200).json({
                data
            })
        } catch (err) {
            next(err)
        }

    }

    static getById(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            next(err)
        }
    }

    static async login(req:Request,res:Response,next:NextFunction){
        try{
            const request: LoginUserRequest = req.body as LoginUserRequest
            const data = await UserService.login(request)
            if(data){
                const token = AuthService.createToken(data)
                res.cookie("access-token",token,{
                    path:"/",
                    httpOnly:true,
                    sameSite:"none",
                    secure:false,
                    maxAge:6 * 60 * 60 * 1000
                })
            }
            res.status(200).json({
                success:true,
                message:"Login success!",
                data 
            })
        }catch(err){
            next(err)
        }
    }

    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateUserRequest = req.body as CreateUserRequest
            const data = await UserService.register(request)
            res.status(200).json({
                success: false,
                data
            })
        } catch (err) {
            next(err)
        }
    }
}