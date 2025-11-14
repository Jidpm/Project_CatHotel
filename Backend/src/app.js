import 'dotenv/config'
import express from "express";
import helmet from "helmet";
import cors from 'cors'
import { apiLimiter } from "./Middleware/rateLimit.middleware.js";
import authRoute from "./Routes/auth.route.js";
import infoRoute from "./Routes/info.route.js";
import healthRoute from "./Routes/health.route.js";
import errorMiddleware from "./Middleware/error.middleware.js";
import notFoundMiddleware  from "./Middleware/notfound.middleware.js";



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet())
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Health check endpoint (no rate limiting)
app.use('/health', healthRoute)

// Apply rate limiting to all API routes
app.use('/api/', apiLimiter)

app.use('/api/auth', authRoute)
app.use('/api/info', infoRoute)


app.use(errorMiddleware)
app.use(notFoundMiddleware)


export default app