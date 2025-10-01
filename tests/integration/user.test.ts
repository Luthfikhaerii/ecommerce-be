import request from "supertest"
import { prisma } from "../../src/application/database"
import {app} from "../../src/application/web"

describe("User API", () => {

    describe("GET /api/user", () => {
        beforeEach(async()=>{
            await prisma.user.create({
                data:{
                    username:"test",
                    email:"test@gmail.com",
                    password:"test",
                    role:"test"
                }
            })
        })
        afterEach(async () => {
            await prisma.user.deleteMany()
        })

        it("GET /api/user", async () => {
            const user =await request(app).get("/api/user")

            expect(user.statusCode).toBe(200)
            expect(user).toBeDefined()
        })
    })
})

