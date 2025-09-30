import { prisma } from "../application/database";
import { CreateUserRequest, UpdateUserRequest } from "../dto/user-dto";

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

    static async createUser(body: CreateUserRequest) {
        try {
            const user = await prisma.user.create({
                data: body
            })
            return user
        } catch (err) {
            throw err
        }
    }

    static async update(id: number, body: UpdateUserRequest) {
        const user = await prisma.user.update({
            where: { id },
            data: body
        })
        return user
    }
}