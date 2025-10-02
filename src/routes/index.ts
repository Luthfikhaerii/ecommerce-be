import express from "express"
import userRouter from "./user-routes"
import productRouter from "./product-routes"
import { paymentRouter } from "./payment"

const router = express.Router()
router.use("/user",userRouter)
router.use("/product",productRouter)
router.use("/payment",paymentRouter)

export default router