import { createCatInfo, getCatInfo, getRoomDetail } from "../Services/info.service.js"
import { addCatInfoSchema } from "../Validations/schema.js"


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

export const roomType = async(req, res, next)=>{
    try {
        const roomId = req.params.id
        const roomDetail = await getRoomDetail(roomId)
        res.json({roomDetail})
    } catch (error) {
        next(error)
    }
}