import prisma from "../Config/prisma.config.js"
import { roomType } from "../Controllers/info.controller.js"


export async function getCatInfo(catName) {
    const catInfo = await prisma.catInfo.findMany({
        where: {catName }
    })
    return catInfo
}

export const createCatInfo = async (catInfoData)=>{
    return await prisma.catInfo.create({
        data: catInfoData
    })
}

export const getRoomDetail = async(roomTypeId)=>{
    const id = Number(roomTypeId)  //แปลงเป็น number
    const roomDetail = await prisma.roomtype.findUnique({
        where:{
            id
        }
    })
    return roomDetail
} 