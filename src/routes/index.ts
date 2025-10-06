import express from "express"
import userRouter from "./user-routes"
import productRouter from "./product-routes"
import { paymentRouter } from "./payment"
import { categoryRouter } from "./category-routes"
import { orderRouter } from "./order-routes"

const router = express.Router()
router.use("/user",userRouter)
router.use("/product",productRouter)
router.use("/order",orderRouter)
router.use("/category",categoryRouter)
router.use("/payment",paymentRouter)

export default router