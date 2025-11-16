import createHttpError from "http-errors"
import jwt from 'jsonwebtoken'
import { getUserBy } from "../Services/user.service.js"

export const authMiddleware = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return next(createHttpError(401, "Unauthorized"));
    }

    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await getUserBy("id", payload.id);

    if (!foundUser) {
      return next(createHttpError(401, "Unauthorized"));
    }

    const { password, createdAt, updatedAt, ...safeData } = foundUser;

    req.user = safeData;

    next();
  } catch (err) {
    next(err);
  }
};


// export const authMiddleware = async(req, res, next) => {
//     const authorization = req.headers.authorization
//     if(!authorization || !authorization.startsWith('Bearer ')){
//         throw createHttpError[401]('Unauthorized')
//     }
//     const token = authorization.split(' ')[1]
//     if(!token) {
// 		throw createHttpError[401]('Token not found')
// 	}
//     const payload = jwt.verify(token, process.env.JWT_SECRET)

//     const foundUser = await getUserBy('id', payload.id)
// 	if(!foundUser) {
// 		throw createHttpError[401]('User not found')
// 	}
// 	const {password, createdAt, updatedAt, ...userData} = foundUser
// 	req.user = userData
// 	next()
// }