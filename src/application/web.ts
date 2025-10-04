import express from "express"
import router from "../routes/index"
import { errorMiddleware } from "../middleware/error-middleware"
import cookieParser from "cookie-parser"
// import { ratelimiter } from "../middleware/ratelimiter-middleware"
import dotenv from "dotenv"
export const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api",router)
// app.use(ratelimiter)
app.use(errorMiddleware)


