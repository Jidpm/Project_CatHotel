import prisma from "../Config/prisma.config.js";

export const getAllRoomService = async () => {
  return await prisma.roomtype.findMany();
};

export const getRoomDetail = async (slug) => {
  const roomDetail = await prisma.roomtype.findUnique({
    where: { slug },
  });
  if (!roomDetail) return null;

  return {
    ...roomDetail,
    price: Number(roomDetail.roomPerNight), 
    maxCats: roomDetail.maxCats,
    extraCatPrice: Number(roomDetail.extraCatPrice || 0),
  };
};

export const getCatsByUserIdService = async (userId) => {
  return await prisma.catInfo.findMany({
    where: { userId },
  });
};

// export const createCatInfo = async (catInfoData)=>{
//     return await prisma.catInfo.create({
//         data: catInfoData
//     })
// }
