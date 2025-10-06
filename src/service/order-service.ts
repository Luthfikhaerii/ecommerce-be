import { create } from "domain";
import { prisma } from "../application/database";
import { CreateOrderRequest, UpdateOrderRequest } from "../models/order-model";
import { Validation } from "../validation/validation";
import { OrderValidation } from "../validation/order-validation";

export class OrderService {
    static async getOrder() {
        const data = await prisma.order.findMany()
        return data
    }

    static async getOrderById(id: number) {
        const data = await prisma.order.findUnique({
            where:{
                id
            }
        })
        if(!data){
            throw new Error("data is not found!")
        }
        return data
    }

    static async createOrder(body: CreateOrderRequest) {
        const data = Validation.validate(OrderValidation.CREATE, body)
        const order = await prisma.order.create({
            data: {
                status: data.status,
                id_user: data.id_user,
                username: data.username,
                address: data.address,
                pos_code: data.pos_code,
                total_price: data.total_price,
                total_quantity: data.total_quantity,
                shipping_cost: data.shipping_cost,
                item_orders: {
                    create: data.item_orders.map((v) => ({
                        id_product: v.id_product,
                        product_name: v.product_name,
                        price: v.price,
                        quantity: v.quantity,
                        size: v.size,
                    }))
                }
            }
        })
        if (!order) {
            throw Error("failed create product")
        }
        return order
    }

    static async updateOrder(id: number, body: UpdateOrderRequest) {
        const data = Validation.validate(OrderValidation.UPDATE, body)
        const order = await prisma.order.update({
            where: { id: id },
            data: {
                ...(data.status && { status: data.status }),
                ...(data.username && { username: data.username }),
                ...(data.address && { address: data.address }),
                ...(data.pos_code && { pos_code: data.pos_code }),
                ...(data.shipping_cost && { shipping_cost: data.shipping_cost }),
            }
        })
        if (!order) {
            throw Error("failed create product")
        }
        return order
    }
}