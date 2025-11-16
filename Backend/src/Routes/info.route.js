import { Router } from "express";
import { addCatInfo, catInfo, roomType } from "../Controllers/info.controller.js";


const infoRoute = Router()

//get roomtype
infoRoute.get('/roomtype', roomType)
infoRoute.get('/roomtype/:slug', roomType)
//Add Cat detail info
infoRoute.post('/catinfo', addCatInfo)
//get cat detail info
infoRoute.get('/catinfo', catInfo)


export default infoRoute