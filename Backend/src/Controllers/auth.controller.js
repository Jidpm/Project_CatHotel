import createHttpError from "http-errors"
import bcrypt from 'bcryptjs'
import { loginSchema, registerSchema } from "../Validations/schema.js"
import { createUser, getMe, getUserBy } from "../Services/user.service.js"
import  jwt  from "jsonwebtoken"
import { success } from "zod"

export const register = async (req, res, next)=>{

    const { phoneNumber, email, firstName, lastName, password, confirmPassword } = req.body
    
    //validation
    const user = registerSchema.parse(req.body)
  
    //Check User are already registered
    const haveUser = await getUserBy(user.email) 
    if (haveUser) {
    return next(createHttpError[409]('This user already register')) //!!
  }
  const newUser = {...user, password: await bcrypt.hash(password, 10)}
  const result = await createUser(newUser)
    res.json({
        message: "Register Successful",
        result: result
    })
}

export const login = async(req, res, next)=>{
    
  try {
    const {email, password} = req.body
     //validate
    const user = loginSchema.parse(req.body)
    const foundUser = await getUserBy('email', email)
    //not found user
    if(!foundUser){
        return next(createHttpError[400]("Login fail!!, Not Found User."))
    }
    const isMatch = await bcrypt.compare(password, foundUser.password)
     if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: foundUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
      const { password: pw, createdAt, updatedAt, ...userData } = foundUser;
      res.json({
        success: true,
        message: "Login Successful",
        token,
        user: { ...userData }
      })

  } catch (error) {
    next(error)
  }
}

export const profileUser = async(req, res)=>{
  const userId = req.user.id
  const user = await getMe(userId)
  res.json({ id: user.id, email: user.email, role: user.role })
}







