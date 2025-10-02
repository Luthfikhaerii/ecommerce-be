import { NextFunction,Request,Response } from "express";
import { CacheService } from "../service/cache-service";

export function cacheMiddleware(prefix:string,ttl:number){
    return async (req:Request,res:Response,next:NextFunction)=>{
         const key = `${prefix}:${req.originalUrl}`
         console.log(key)
        try{
            const cached = await CacheService.get(key)
            if(cached){
                res.json(JSON.parse(cached))
            } 

            const originalJson = res.json.bind(res);
            (res as any).json = async (body:any)=>{
                await CacheService.set(key,JSON.stringify(body),ttl)
                return originalJson(body)
            }
            next()
        }catch(err){
            console.log('Redis err',err)
            next()
        }
    }
}