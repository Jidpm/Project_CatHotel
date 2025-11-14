
import { authApi } from "../config/axios"


export async function registerUser(userData) {
    try {
        const response = await authApi.post('/register', userData)
        return response.data
    } catch (error) {
        const status = error.response?.status || 500
        const message = error.response?.data?.message || "Registration failed."
        //error obj
        const apiError = new Error(message)
        apiError.status = status
        throw apiError
    }
}