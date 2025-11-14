import { Router } from "express";
import { addCatInfo, catInfo, roomType } from "../Controllers/info.controller.js";


const infoRoute = Router()

//Add Cat detail info
infoRoute.post('/catinfo', addCatInfo)
//get cat detail info
infoRoute.get('/catinfo', catInfo)

//get roomtype
infoRoute.get('/roomtype/:id', roomType)

export default infoRoute