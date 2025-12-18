import { useAuthStore } from "../../store/useAuthStore";
import { Link, Outlet, useNavigate } from "react-router";
import { useState, useCallback } from "react";
import { LoginDialog } from "../LoginDialog";
import { RegisterDialog } from "../RegisterDialog";
import { Cat, User } from "lucide-react";
import { Button } from "../ui/button";

const MainLayout = () => {
  const { userData, myCats, setUserData, setIsLoggedIn, isLoggedIn, logout } =
    useAuthStore();

  const navigate = useNavigate();

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Handler Login Success ใช้ useCallback เพื่อความเร็ว ไม่สร้างฟังก์ชันใหม่ทุกครั้ง
  const handleLoginSuccess = useCallback(
    (userData) => {
      setUserData(userData);
      setIsLoggedIn(true);
      setLoginOpen(false);
    },
    [setUserData, setIsLoggedIn]
  );

  const handleSwitchToRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <header className="border-b border-[#E8DCC8] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#6F5638] rounded-lg flex items-center justify-center">
                <Cat className="w-6 h-6 text-white" />
              </div>
              <span onClick={()=>navigate('/')} className="cursor-pointer text-[#8B6F47]">Kuma Cat Hotel</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                Home
              </Link>
              <Link to="/roomtype/standard-room" className="text-sm text-[#8B6F47] hover:text-[#6F5638]">Rooms</Link>
              <Link
                to="/contact"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                Contact
              </Link>
            </nav>

            {isLoggedIn ? (
              <Button
                onClick={() => navigate("/profile")}
                variant="outline"
                className="border-[#8B6F47] text-[#8B6F47]"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            ) : (
              <Button
                onClick={() => setLoginOpen(true)}
                variant="outline"
                className="border-[#8B6F47] text-[#8B6F47]"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </header>

      <Outlet
        context={{
          userData,
          myCats,
          onLogout: logout,
        }}
      />

      {/* Footer */}
      <footer className="bg-[#FAF8F5] border-t border-[#E8DCC8] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#6F5638] rounded-lg flex items-center justify-center">
                <Cat className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#8B6F47]">Kuma Cat Hotel</span>
            </div>

            <div className="flex gap-8 text-sm text-[#A68A64]">
              <Link to="/" className="hover:text-[#8B6F47]">
                Home
              </Link>
              <Link to="/roomtype/standard-room" className="hover:text-[#8B6F47]">
                Rooms
              </Link>
              {/* <a href="#about" className="hover:text-[#8B6F47]">
                About
              </a> */}
              <Link to="/contact" className="hover:text-[#8B6F47]">
                Contact
              </Link>
            </div>

            <p className="text-sm text-[#A68A64]">© 2025 Kuma Cat Hotel</p>
          </div>
        </div>
      </footer>

      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onLoginSuccess={handleLoginSuccess}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
};

export default MainLayout;
