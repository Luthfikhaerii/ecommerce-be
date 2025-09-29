import {NextFunction, Request, Response} from "express"
import { UserService } from "../service/user-service"
import type { CreateUserRequest } from "../model/user-model"

export class UserController {

    static get(req:Request,res:Response){
        return 
    }

    static getById(req:Request,res:Response){

    }

    static async register(req:Request,res:Response,next:NextFunction){
        const request:CreateUserRequest = req.body as CreateUserRequest
        const data = await UserService.create(request)
    }
}