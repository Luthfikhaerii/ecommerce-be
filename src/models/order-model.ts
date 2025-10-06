type Item_Order = {
    id_product?: number
    id_order: number
    product_name: string
    price: number
    quantity: number
    size: string
}

export type CreateOrderRequest = {
    status: string
    id_user: number
    username: string
    address: string
    pos_code: number
    total_price: number
    total_quantity: number
    shipping_cost: number
    item_orders: Item_Order[]
}

export type UpdateOrderRequest = {
    status?: string
    username?: string
    address?: string
    pos_code?: number
    shipping_cost?: number
}