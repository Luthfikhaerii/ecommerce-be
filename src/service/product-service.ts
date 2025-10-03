import { prisma } from "../application/database";
import { CreateProductRequest } from "../models/product-model";

export class ProductService{
    static async getProduct(){
        const data = await prisma.product.findMany()
        if(!data){
            throw Error("failed get all product")
        }
        return data 
    }

    static async createProduct(body:CreateProductRequest){
        const data = prisma.product.create({
            data:body
        })
        if(!data){
            throw Error("failed create product")
        }
        return data
    }
}