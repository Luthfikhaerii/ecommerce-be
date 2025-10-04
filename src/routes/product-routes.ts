import {Router} from "express"
import { ProductController } from "../controllers/product-controller"
// import { cacheMiddleware } from "../middleware/cache-middleware"
const productRouter = Router()

productRouter.post("/",ProductController.create)
// productRouter.get("/",cacheMiddleware("product",500),ProductController.get)
productRouter.get("/",ProductController.get)

export default productRouter