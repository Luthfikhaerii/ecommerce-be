import { z, ZodType } from "zod";

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        username: z.string().min(4).max(50),
        email: z.string().min(4).max(50),
        password: z.string().min(4).max(50)
    })

    static readonly LOGIN: ZodType = z.object({
        email: z.string().min(4).max(50),
        password: z.string().min(4).max(50)
    })

    static readonly UPDATE: ZodType = z.object({
        email: z.string(),
        password: z.string().min(4).max(50).optional(),
        username: z.string().min(4).max(50).optional()
    })
}