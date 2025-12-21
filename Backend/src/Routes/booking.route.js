import { Router } from "express";
import { createBooking } from "../Controllers/booking.controller.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";


const bookingRoute = Router()

bookingRoute.post('/', authMiddleware, createBooking )


export default bookingRoute