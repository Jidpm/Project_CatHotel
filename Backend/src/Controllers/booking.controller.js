import { createBookingService } from "../Services/booking.service.js";

export const createBooking = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?.userId;

    const {
      checkInDate,
      checkOutDate,
      totalPrice,
      bookingStatus = "PENDING",
      services = [],
      rooms = [],
      cats = [],
    } = req.body;

    if (!checkInDate || !checkOutDate) {
      return res.status(400).json({
        message: "Missing required fields (userId, checkInDate, checkOutDate)",
      });
    }

    // service
    const booking = await createBookingService({
      userId,
      checkInDate,
      checkOutDate,
      totalPrice,
      bookingStatus,
      services,
      rooms,
      cats,
    });

    return res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
