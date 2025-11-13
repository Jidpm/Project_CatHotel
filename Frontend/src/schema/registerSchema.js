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
