import createHttpError from "http-errors";
import bcrypt from "bcryptjs";
import { loginSchema, registerSchema } from "../Validations/schema.js";
import { createUser, getMe, getUserBy } from "../Services/user.service.js";
import jwt from "jsonwebtoken";
import prisma from "../Config/prisma.config.js";

export const register = async (req, res, next) => {
  try {
    const {
      phoneNumber,
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    } = req.body;

    //validation
    const user = registerSchema.parse(req.body);

    //Check User are already registered
    const haveUser = await getUserBy("email", user.email);
    if (haveUser) {
      return next(createHttpError(409, "This user already register"));
    }
    const newUser = { ...user, password: await bcrypt.hash(password, 10) };
    const result = await createUser(newUser);

    res.json({
      message: "Register Successful",
      result: result,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validate
    const user = loginSchema.parse(req.body);
    const foundUser = await getUserBy("email", email);
    //not found user
    if (!foundUser) {
      return next(createHttpError(400, "Login fail!!, Not Found User."));
    }
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    //Create token
    const payload = {
      id: foundUser.id,
      role: foundUser.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15d",
      algorithm: "HS256",
    });

    const { password: pw, createdAt, updatedAt, ...userData } = foundUser;
    res.json({
      success: true,
      message: "Login Successful",
      token,
      user: { ...userData },
    });
  } catch (error) {
    next(error);
  }
};

export const profileUser = async (req, res, next) => {
  try {
    const rawUserId = req.user?.id || req.user?.userId;

    if (!rawUserId) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const userId = rawUserId;

    if (Number.isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const user = await getMe(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, createAt, updatedAt, ...userData } = user;

    res.json({
      success: true,
      user: userData,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName, phoneNumber, address } = req.body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        phoneNumber,
        address,
      },
    });

    const { password, createdAt, updatedAt, ...userData } = user;

    res.json({
      success: true,
      user: userData,
    });
  } catch (err) {
    res.status(400).json({ message: "Update failed" });
  }
};



