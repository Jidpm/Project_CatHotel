import prisma from "../Config/prisma.config.js"


export const createBookingService = async (data) => {
    const {
    userId,
    checkInDate,
    checkOutDate,
    totalPrice,
    bookingStatus,
    services,
    rooms,      // [{ roomtypeId: 1, quantity: 2 }]
    cats        // [1, 2, 3] = catInfoId array
  } = data

  // ใช้ transaction เพื่อกันข้อมูลเพี้ยน ถ้าข้อมูลไม่ครบ ยกเลิกทันที
    return await prisma.booking.$transaction(async (transaction) => {
        //make booking
        const booking = await transaction.booking.create({
            data:{
                userId,
                checkInDate: new Date(checkInDate),
                checkOutDate: new Date(checkOutDate),
                totalPrice,
                bookingStatus,
                services: JSON.stringify(services),
            }
        })

        //add room of booked
        if(rooms?.length > 0){
            await transaction.bookingRoom.createMany({
                data: rooms.map((room) => ({
                    bookingId: booking.id,
                    roomtypeId: room.roomtypeId,
                    quantity: room.quantity?? 1,
                }))
            })
        }

        //add cats info
        if(cats?.length > 0){
            await transaction.catDetailBooking.createMany({
                data: cats.map((catId) => ({
                    bookingId: booking.id,
                    catInfoId: catId,
                }))
            })
        }

        return booking

    })
}

