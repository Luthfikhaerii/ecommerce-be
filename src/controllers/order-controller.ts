import { Request, Response, NextFunction } from "express"
import { OrderService } from "../service/order-service"
import { CreateOrderRequest, UpdateOrderRequest } from "../models/order-model"

export class OrderController {
    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const data = OrderService.getOrder()
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            next(err)
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = parseInt(req.params.id as string)
            const data = OrderService.getOrderById(id)
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            next(err)
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body: CreateOrderRequest = req.body as CreateOrderRequest
            const data = OrderService.createOrder(body)
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            next(err)
        }

    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = parseInt(req.params.id as string)
            const body: UpdateOrderRequest = req.body as UpdateOrderRequest
            const data = OrderService.updateOrder(id,body)
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            next(err)
        }

    }
}