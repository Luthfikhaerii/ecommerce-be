import { Request, Response, NextFunction } from "express"
import { ResponseError } from "../error/response-error"
import { ZodError } from "zod"
export async function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof ZodError) {
        res.status(400).json({
            success:false,
            errors: `Validator error ${JSON.stringify(error)}`
        })
    } else if (error instanceof ResponseError) {
        res.status(error.status).json({
            success:false,
            errors: error.message,
        })
    } else {
        res.status(500).json({
            success:false,
            errors: error.message
        })
    }
}