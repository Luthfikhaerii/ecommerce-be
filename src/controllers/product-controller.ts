import { NextFunction,Request,Response } from "express";
import { ProductService } from "../service/product-service";
import { CreateProductRequest } from "../models/product-model";

export class ProductController {
    static async get(req:Request,res:Response,next:NextFunction){
        try{
            const data = ProductService.getProduct()
            res.status(200).json({
                success:true,
                data
            })
        }catch(err){
            next(err)
        }
    }
    static async create(req:Request,res:Response,next:NextFunction){
        try{
        const body:CreateProductRequest = req.body as CreateProductRequest
        const data = ProductService.createProduct(body)
        res.status(200).json({
            success:true,
            data
        })
        }catch(err){
            next(err)
        }

    }
}