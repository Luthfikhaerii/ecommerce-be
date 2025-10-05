import { prisma } from "../application/database";

export class Category {
    static async getCategory() {
        const data = await prisma.category.findMany()
        return data
    }

    static async createCategory(name: string) {
        const data = await prisma.category.create({
            data: {
                category: name
            }
        })
        return data
    }
}