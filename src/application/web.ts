import express from "express"
import router from "../routes/index"
import { errorMiddleware } from "../middleware/error-middleware"
import cookieParser from "cookie-parser"
export const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api",router)
app.use(errorMiddleware)


