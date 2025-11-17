import { Router } from "express";
import { addCatInfo, catInfo, getAllRoomTypes, roomType } from "../Controllers/info.controller.js";


const infoRoute = Router()

//get roomtype
infoRoute.get('/roomtype', getAllRoomTypes)
infoRoute.get('/roomtype/:slug', roomType)
//Add Cat detail info
infoRoute.post('/catinfo', addCatInfo)
//get cat detail info
infoRoute.get('/catinfo', catInfo)


export default infoRoute