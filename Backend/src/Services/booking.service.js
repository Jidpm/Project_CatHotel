import prisma from "../Config/prisma.config.js";

export const createBookingService = async ({
  userId,
  checkInDate,
  checkOutDate,
  totalPrice,
  services,
  rooms,
  cats,
}) => {
  return await prisma.$transaction(async (tx) => {
    // 1. create booking
    const booking = await tx.booking.create({
      data: {
        userId,
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
        totalPrice,
        bookingStatus: "PENDING",
        services: JSON.stringify(services),
      },
    });

    // 2. rooms
    if (rooms?.length) {
      await tx.bookingRoom.createMany({
        data: rooms.map((room) => ({
          bookingId: booking.id,
          roomtypeId: room.roomtypeId,
          quantity: room.quantity ?? 1,
        })),
      });
    }

    // 3. cats ใช้ catInfoId
    if (cats?.length) {
      await tx.catDetailBooking.createMany({
        data: cats.map((catId) => ({
          bookingId: booking.id,
          catInfoId: catId,
        })),
      });
    }

    return booking;
  });
};
