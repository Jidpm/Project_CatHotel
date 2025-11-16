import { createCatInfo, getCatInfo, getRoomDetail } from "../Services/info.service.js"
import { addCatInfoSchema } from "../Validations/schema.js"

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

export const addCatInfo = async(req, res, next)=>{
    try {
        //validation
        const catDetailInfo = addCatInfoSchema.parse(req.body)

        const newCatInfo = {...catDetailInfo }
        const result = await createCatInfo(newCatInfo)
        res.json({
            message: "Add info successful",
            result: result
        })
    } catch (error) {
        next(error)
    }
}

export const catInfo = async(req, res, next)=>{
    try {
        const catName = req.body.catName
        const catDetail = await getCatInfo(catName)
        res.json({catDetail})
    } catch (error) {
        next(error)
    }
}
