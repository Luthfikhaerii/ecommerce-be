import { NextFunction, Request, Response } from "express";
import { AuthService } from "../service/auth-service";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken"

interface AuthRequest extends Request {
    user?: { id: number; email: string, username: string, role: string };
}

export function authMiddleware(role: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies.token
        try {
            if (!token) {
                throw new Error("Token is not exist!")
            }
            jwt.verify(token, process.env.JWT_SECRET_KEY!, (err: any, payload: any) => {
                if (err) {
                    throw new Error("Token is not valid")
                }
                (req as AuthRequest).user = payload
                if (role !== payload.role) {
                    throw new Error("Forbidden to access!")
                } else {
                    next()
                }

            })
        } catch (err) {
            res.status(400).json({ message: (err as Error).message })
        }
    }
}