import { z } from "zod";


export const registerSchema = z.object({
	email: z.string().email("Invalid email address"),
	firstName: z.string().min(2, "first name is required"),
	lastName: z.string().min(2, "last name is required"),
	password: z.string().min(8, "password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "confirm password must be at least 8 characters"),
	address: z.string().min(2, "Address is required"),
	phoneNumber: z.string().min(10, "phone number is required"),
})
    
.refine(data => data.password === data.confirmPassword, {
	message: 'confirmPassword must match password',
	path: ['confirmPassword']
})
