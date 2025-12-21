import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
  // 🔐 1) Hash password ก่อน seed
  const hashedPassword = await bcrypt.hash("19121997", 10);

  console.log("🌱 Seeding database...");

  // 1) Create user
  const user1 = await prisma.user.create({
    data: {
      firstName: "Jidapa",
      lastName: "Metha",
      email: "jidapa.mea@gmail.com",
      phoneNumber: "0621862762",
      password: hashedPassword,
      address: "Bangkok, Thailand",
      role: "USER",
    },
  });

  // 2) Create Cat Infos
  const cat1 = await prisma.catInfo.create({
    data: {
      catName: "Kuma",
      age: "1 ปี",
      breed: "Ragdolls",
      healthInfo: "สุขภาพดี ไม่มีโรคประจำ",
      userId: user1.id,
    },
  });

  const cat2 = await prisma.catInfo.create({
    data: {
      catName: "Luna",
      age: "1 ปี",
      breed: "American Shorthair",
      healthInfo: "แพ้อาหารไก่",
      userId: user1.id,
    },
  });

  // 3) Room Types
  const standardRoom = await prisma.roomtype.create({
    data: {
      roomType: "Standard Room",
      slug: "standard-room",
      size: "2x3 เมตร",
      capacity: "1",
      roomPerNight: 350,
      description:
        "ห้องพักขนาดกะทัดรัด เหมาะสำหรับแมว 1 ตัว พร้อมอุปกรณ์ครบครัน พื้นที่ 2x3 เมตร เหมาะสำหรับแมว 1 ตัว มีกล้องวงจรปิด ตรวจสอบได้ตลอดเวลา อุปกรณ์ครบครัน: กระบะทราย, ชามน้ำ, คอนโดแมว",
      roomStatus: "AVAILABLE",
      maxCats: 1,
      extraCatPrice: 0,
      imageUrl:
        "https://res.cloudinary.com/dop1xja12/image/upload/v1766026517/standard_room_axjlfu.jpg",
    },
  });

  const deluxeRoom = await prisma.roomtype.create({
    data: {
      roomType: "Deluxe Room",
      slug: "deluxe-room",
      size: "3x4 เมตร",
      capacity: "2",
      roomPerNight: 550,
      description:
        "ห้องพักขนาดใหญ่ เหมาะสำหรับแมว 1-2 ตัว พร้อมพื้นที่เล่นและพักผ่อน พื้นที่ 3x4 เมตร เหมาะสำหรับแมว 1-2 ตัว มีหน้าต่างวิวสวน น้องๆชอบนอนมองวิว พื้นที่เล่นส่วนตัว พร้อมคอนโดแมวขนาดใหญ่และของเล่น",
      roomStatus: "AVAILABLE",
      maxCats: 2,
      extraCatPrice: 100,
      imageUrl:
        "https://res.cloudinary.com/dop1xja12/image/upload/v1766027348/delux_room_xzhpld.jpg",
    },
  });

  const suiteRoom = await prisma.roomtype.create({
    data: {
      roomType: "Suite Room",
      slug: "suite-room",
      size: "4x5 เมตร",
      capacity: "4",
      roomPerNight: 950,
      description:
        "ห้องพักระดับพรีเมียม เหมาะสำหรับแมว 3-4 ตัว พร้อมบริการ VIP พื้นที่ 4x5 เมตร เหมาะสำหรับแมว 2-3 ตัว มีห้องนอนแยก พื้นที่เล่นและพื้นที่พักผ่อนแยกกัน พร้อมบริการ VIP เช่น อาหารพิเศษและการดูแลเป็นพิเศษ",
      roomStatus: "AVAILABLE",
      maxCats: 4,
      extraCatPrice: 150,
      imageUrl:
        "https://res.cloudinary.com/dop1xja12/image/upload/v1766027655/suit_room_z34nna.jpg",
    },
  });

  // 4) Booking example
  const booking = await prisma.booking.create({
    data: {
      checkInDate: new Date("2025-01-10"),
      checkOutDate: new Date("2025-01-12"),
      totalPrice: 1100,
      bookingStatus: "PENDING",
      services: "อาบน้ำ ตัดเล็บ",
      userId: user1.id,

      rooms: {
        create: [{ roomtypeId: standardRoom.id }],
      },

      catDetailBooking: {
        create: [{ catInfoId: cat1.id }, { catInfoId: cat2.id }],
      },
    },
  });

  console.log("🎉 Seed completed!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
