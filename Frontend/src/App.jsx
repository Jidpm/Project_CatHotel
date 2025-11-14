import { useCallback, useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useAuthStore } from "./store/useAuthStore";
import { getMe } from "./api/auth";

export default function App() {
  const navigate = useNavigate();

  // Use Zustand store for auth state
  const {
    userData,
    myCats,
    setUserData,
    setIsLoggedIn,
    logout: storeLogout,
  } = useAuthStore();

  // Handle logout
  const handleLogout = useCallback(() => {
    storeLogout();
    localStorage.removeItem("token");
    navigate("/");
  }, [navigate, storeLogout]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    async function fetchUser() {
      const res = await getMe();
      if (res.success) {
        setUserData(res.user);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
      }
    }

    fetchUser();
  }, []);

  return <Outlet context={{ userData, myCats, onLogout: handleLogout }} />;
}
