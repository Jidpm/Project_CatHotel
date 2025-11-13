import { z } from "zod";


export const registerSchema = z.object({
	email: z.string().email("Invalid email address").optional(),
	firstName: z.string().min(2, "first name is required"),
	lastName: z.string().min(2, "last name is required"),
	password: z.string().min(4, "password at least 5 characters"),
	confirmPassword: z.string().min(4, "confirm password is required"),
	address: z.string().min(2, "Address is required"),
})
    
.refine(data => data.password === data.confirmPassword, {
	message: 'confirmPassword must match password',
	path: ['confirmPassword']
})

export const loginSchema = z.object({
	email: z.string().email("Invalid email address").optional(),
	password: z.string().min(4, "password at least 4 characters"),
})

export const addCatInfoSchema = z.object({
	catName: z.string().min(2, "Name is require"),
	age: z.string().min(1, "Age is require"),
	breed: z.string().min(2, "Breed is require"),
	healthInfo: z.string().min(1, "Health info is require")
})
