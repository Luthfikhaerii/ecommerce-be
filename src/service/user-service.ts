import { prisma } from "../application/database";
import { CreateUserRequest, LoginUserRequest, UpdateUserRequest } from "../models/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";

export class UserService {
    static async getUsers() {
        const user = await prisma.user.findMany()
        return user;
    }
    static async getUserById(id: number) {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return user
    }

    static async login(body: LoginUserRequest) {
        
        const validate = Validation.validate(UserValidation.LOGIN,body)
        const {email,password} = validate as LoginUserRequest
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error("User is not exist!")
        }
        if (user.password !== password) {
            throw new Error("Wrong password!")
        }
        return {
            id: user.id,
            username:user.username,
            email: user.email,
            role: user.role
        }
    }

    static async register(body: CreateUserRequest) {
        const user = await prisma.user.create({
            data: body
        })
        return user
    }

    static async update(id: number, body: UpdateUserRequest) {
        const user = await prisma.user.update({
            where: { id },
            data: body
        })
        return user
    }
}