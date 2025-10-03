import { NextFunction, Request, Response } from "express";
import { logger } from "../application/logger";
import { redis } from "../application/redis";

const TTL = 60
const MAX_REQ = 10

export async function ratelimiter(req: Request, res: Response, next: NextFunction) {
    try {
        const ip = req.ip || "unknow_ip"
        const key = `limiter:${req.ip}`
        const request = await redis.incr(key)
        if (request == 1) {
            await redis.expire(key, TTL)
        }
        if (request >= MAX_REQ) {
            return res.status(429).json({
                success: false,
                message: "Too many requests, please try again later."
            });
        }
        next()
    } catch (err) {
        logger.error(err)
        next()
    }
}