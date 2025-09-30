import { before, beforeEach, describe, it, Mock } from "node:test";
import {prisma} from "../../../src/application/database"
import {UserService} from "../../../src/service/user-service"

jest.mock("../../../src/application/database",() => ({
  prismaClient: {
    user: {
      create: jest.fn(),
    },
  },
}))

describe("UserService",()=>{
    // beforeEach(()=>{
    //     jest.clearAllMocks()
    // })
    it("should return user by id", async ()=>{
        const mockUser : any = {
            username:"luthfi",
            role:"admin",
            email:"luthfi@gmail.com",
            password:"123"
        };
        const create = prisma.user.create as jest.Mock
        create.mockResolvedValue(mockUser)
        console.log(mockUser)
        const user = await UserService.createUser(mockUser)
        console.log(user)
        expect(user).toEqual(mockUser)       
    })
})