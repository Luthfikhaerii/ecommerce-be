import { NextFunction, Request, Response } from "express"
import { UserService } from "../service/user-service"
import type { CreateUserRequest } from "../dto/user-dto"

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

    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateUserRequest = req.body as CreateUserRequest
            const data = await UserService.createUser(request)
            res.status(200).json({
                success: false,
                data
            })
        } catch (err) {
            next(err)
        }
    }
}