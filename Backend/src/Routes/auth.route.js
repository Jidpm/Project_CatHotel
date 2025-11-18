import { Router } from "express";
import { login, profileUser, register } from "../Controllers/auth.controller.js";
import { getSettings, updateSettings } from "../Controllers/setting.controller.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { adminMiddleWare } from "../Middleware/setting.middleware.js";
import { authLimiter } from "../Middleware/rateLimit.middleware.js";


const authRoute = Router()

authRoute.post('/register', authLimiter, register)
authRoute.post('/login', authLimiter, login)
authRoute.get('/profile', authMiddleware, profileUser)



//Everyone can see Settings but need to login
// authRoute.get('/settings', authMiddleware, getSettings)
//Admin can update setting
// authRoute.put('/settings', authMiddleware, adminMiddleWare, updateSettings)

export default authRoute