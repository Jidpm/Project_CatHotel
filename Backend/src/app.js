import express from "express";
import helmet from "helmet";
import cors from 'cors'
import authRoute from "./Routes/auth.route.js";
import infoRoute from "./Routes/info.route.js"; 
import errorMiddleware from "./Middleware/error.middleware.js";
import notFoundMiddleware  from "./Middleware/notfound.middleware.js";



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.use('/api/auth', authRoute)
app.use('/api/info', infoRoute)


app.use(errorMiddleware)
app.use(notFoundMiddleware)


export default app