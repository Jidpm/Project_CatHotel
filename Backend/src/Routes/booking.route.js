import { Router } from "express";
import { createBooking } from "../Controllers/booking.controller.js";


const bookingRoute = Router()

bookingRoute.post('/', createBooking )


export default bookingRoute