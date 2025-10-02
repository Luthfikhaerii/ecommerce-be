import Redis from "ioredis"
import { logger } from "./logger"

export const redis = new Redis({
    host: "127.0.0.1",
    port: 6379,
    password:"123"
})

redis.on("connect",()=>{
    logger.info("Redis connext")
})
