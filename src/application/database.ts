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
