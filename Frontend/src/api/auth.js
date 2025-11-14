import { authApi } from "../config/axios"


export const loginUser = async (loginData) => {
    try {
        const response = await authApi.post('/login', loginData)
        return response.data
    } catch (error) {
        console.error('Login Failed:', error)
        return { success: false, message: error.response?.data?.message || "Login failed." }
    } 
}

export const getMe = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await authApi.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get Me Failed:", error);
    return { success: false, message: "Unauthorized" };
  }
};
