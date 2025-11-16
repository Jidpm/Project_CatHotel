import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "./store/useAuthStore";
import { getMe } from "./api/auth";

export default function App() {
  // const navigate = useNavigate();

  // Use Zustand store for auth state
  const {
    setUserData,
    setIsLoggedIn,
    logout,
  } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    async function fetchUser() {
      const res = await getMe() // ส่ง token ไปหารายละเอียด user

      if (res.success) {
        setUserData(res.user);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token")// token หมดอายุ
      }
    }

    fetchUser();
  }, []);

  // Handle logout
  // const handleLogout = useCallback(() => {
  //   logout();
  //   localStorage.removeItem("token");
  //   navigate("/");
  // }, [navigate, logout]);

  return null


  // return <Outlet context={{ userData, myCats, onLogout: handleLogout }} />;
}



