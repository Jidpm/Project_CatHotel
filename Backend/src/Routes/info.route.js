import { Router } from "express";
import { getAllRoomTypes, getCatInfoByUserId, roomType } from "../Controllers/info.controller.js";


const infoRoute = Router()

//get roomtype
infoRoute.get('/roomtype', getAllRoomTypes)
infoRoute.get('/roomtype/:slug', roomType)

//get cat detail info
infoRoute.get('/catsinfo/:userId', getCatInfoByUserId)

//Add Cat detail info
// infoRoute.post('/catinfo/:userId', addCatInfo)


export default infoRoute