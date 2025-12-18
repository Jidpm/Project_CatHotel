import { getAllRoomService, getCatsByUserIdService, getRoomDetail } from "../Services/info.service.js"

export const getAllRoomTypes = async (req, res, next)=>{
    try {
        const rooms = await getAllRoomService()
        res.json({roomType: rooms})
    } catch (error) {
        next(error)
    }
}

export const roomType = async(req, res, next)=>{
    try {
        const slug = req.params.slug
        // const { slug } = req.params ท่านี้ก็ได้ เขียนสั้นกว่า ไม่ต้องระบุลึกตอน req
        const roomDetail = await getRoomDetail(slug)
        if(!roomDetail){
            return res.status(404).json({message: "Room not found"})
        }
        res.json(roomDetail)
    } catch (error) {
        next(error)
    }
}

export const getCatInfoByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const cats = await getCatsByUserIdService(Number(userId));

        return res.json({ cats });
    } catch (error) {
        next(error);
    }
};

// export const addCatInfo = async(req, res, next)=>{
//     try {
//         //validation
//         const catDetailInfo = addCatInfoSchema.parse(req.body)

//         const newCatInfo = {...catDetailInfo }
//         const result = await createCatInfo(newCatInfo)
//         res.json({
//             message: "Add info successful",
//             result: result
//         })
//     } catch (error) {
//         next(error)
//     }
// }

