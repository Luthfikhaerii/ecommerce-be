import express from "express"
import userRouter from "./user-routes"
import productRouter from "./product-routes"

const router = express.Router()
router.use("/user",userRouter)
router.use("/product",productRouter)

export default router