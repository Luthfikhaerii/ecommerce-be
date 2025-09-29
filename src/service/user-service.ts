import { prisma } from "../application/database";
import { CreateUserRequest } from "../model/user-model";

export class UserService{
    static async getUsers(){
        const data = await prisma.user.findMany()
        return data;
    }

    static async getUserById(id:string){

    }

    static async create(body:CreateUserRequest){

    }
}