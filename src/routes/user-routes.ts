import express,{Request,Response} from "express"
import { UserController } from "../controllers/user-controller"
const userRouter = express.Router()

userRouter.get('/',UserController.get)
userRouter.post('/',(req:Request,res:Response)=>{

})

export default userRouter