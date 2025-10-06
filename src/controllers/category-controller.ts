import { Request,Response,NextFunction } from "express";
import { CategoryService } from "../service/category-service";
import { CreateCategoryRequest } from "../models/category-model";

export class CategoryController {
    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await CategoryService.getCategory();
            res.status(200).json({
                success: true,
                data
            });
        } catch (err) {
            next(err);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body: CreateCategoryRequest = req.body as CreateCategoryRequest;
            const data = await CategoryService.createCategory(body.category);
            res.status(200).json({
                success: true,
                data
            });
        } catch (err) {
            next(err);
        }
    }
}