import express,{Request,Response} from "express"
import { UserController } from "../controllers/user-controller"
const userRouter = express.Router()

userRouter.get("/",UserController.get)
userRouter.post("/login",UserController.login)
userRouter.post("/register",UserController.register)

export default userRouter