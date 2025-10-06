import z from "zod";

export class OrderValidation {
    static readonly ITEM_ORDER = z.object({
        id_product: z.number().optional(),
        product_name: z.string().min(1, "product_name is required"),
        price: z.number().min(0),
        quantity: z.number().min(1),
        size: z.string().min(1)
    })

    static readonly CREATE = z.object({
        status: z.string().min(1, "status is required"),
        id_user: z.number(),
        username: z.string().min(1, "username is required"),
        address: z.string().min(1, "address is required"),
        pos_code: z.number(),
        total_price: z.number().min(0),
        total_quantity: z.number().min(1),
        shipping_cost: z.number().min(0),
        item_orders: z.array(this.ITEM_ORDER)
    })

    static readonly UPDATE = z.object({
        status: z.string().optional(),
        username: z.string().min(1).optional(),
        address: z.string().min(1).optional(),
        pos_code: z.number().optional(),
        shipping_cost: z.number().min(0).optional(),
    })
}