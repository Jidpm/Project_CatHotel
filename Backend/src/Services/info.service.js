import prisma from "../Config/prisma.config.js"


export const getAllRoomService = async()=>{
    return await prisma.roomtype.findMany()
}

export const getRoomDetail = async(slug)=>{

    const roomDetail = await prisma.roomtype.findUnique({
        where:{ slug },
        // include:{
        //     image: true,
        //     amenities: true
        // }
    })
    return roomDetail
} 

export const getCatsByUserIdService = async (userId) => {
    return await prisma.catInfo.findMany({
        where: { userId },
    })
}

// export const createCatInfo = async (catInfoData)=>{
//     return await prisma.catInfo.create({
//         data: catInfoData
//     })
// }
