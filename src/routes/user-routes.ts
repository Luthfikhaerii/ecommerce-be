import express,{Request,Response} from "express"
const userRouter = express.Router()

userRouter.get('/',(req:Request,res:Response)=>{
    res.send("awok wik")
})
userRouter.post('/',(req:Request,res:Response)=>{
    
})

export default userRouter