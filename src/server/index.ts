import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
// import { Request, Response } from "express"

dotenv.config()
const server = express()

// todo: middlewares
server.use(express.json())
server.use(morgan("dev"))
server.use(cors())

const bootstrap = () => {
    try {
        server.listen(process.env.PORT)
        console.log(`http://localhost:${process.env.PORT}`);
    } catch (error) {
        console.error(error)
    }
}

bootstrap()