import 'dotenv/config'
import express from "express";
import helmet from "helmet";
import cors from 'cors'
import { apiLimiter } from "./Middleware/rateLimit.middleware.js";
import authRoute from "./Routes/auth.route.js";
import infoRoute from "./Routes/info.route.js";
import errorMiddleware from "./Middleware/error.middleware.js";
import notFoundMiddleware  from "./Middleware/notfound.middleware.js";
import bookingRoute from './Routes/booking.route.js';



const app = express()
app.use(express.json())

// เวลาเข้ารหัสช่องว่างจะถูกแทนที่ด้วยเครื่องหมายบวก (\(+\)) หรือ \(`\) และอักขระอื่น ๆ
app.use(express.urlencoded({ extended: true }))

app.use(helmet())
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Apply rate limiting to all API routes
//ป้องกันคนยิง req เยอะเกินไป 
app.use('/api/', apiLimiter)

app.use('/api/auth', authRoute)

app.use('/api/info', infoRoute)

app.use('/api/booking', bookingRoute)


app.use(errorMiddleware)
app.use(notFoundMiddleware)


export default app