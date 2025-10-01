import express,{Request,Response} from "express"
import { UserController } from "../controllers/user-controller"
const userRouter = express.Router()

userRouter.get("/",UserController.get)
userRouter.post("/",UserController.register)

export default userRouter