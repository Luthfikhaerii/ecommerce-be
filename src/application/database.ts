import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";
export const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level: "error"
        },
        {
            emit:"event",
            level:"info"
        },
        {
            emit:"event",
            level:"warn"
        },
        // {
        //     emit:"event",
        //     level:"query"
        // }
    ]
});

prisma.$on("error",(e: any)=>{
    logger.error(e)
})
prisma.$on("warn",(e: any)=>{
    logger.warn(e)
})
// prisma.$on("query",(e: any)=>{
//     logger.info(e)
// })
prisma.$on("info",(e: any)=>{
    logger.info(e)
})