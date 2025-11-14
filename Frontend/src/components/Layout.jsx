import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";
import { useState, useCallback, useEffect } from "react";
import { LoginDialog } from "../components/LoginDialog";
import { RegisterDialog } from "../components/RegisterDialog";
import { Cat, User } from "lucide-react";
import { Button } from "./ui/button";

const Layout = ({ children }) => {
  const { myCats, setUserData, setIsLoggedIn, isLoggedIn, setMyCats } =
    useAuthStore();
  const navigate = useNavigate();

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Initialize mock cat data if empty
  useEffect(() => {
    if (myCats.length === 0 && isLoggedIn) {
      setMyCats([
        {
          id: 1,
          name: "มิว",
          breed: "Scottish Fold",
          age: "2 ปี",
          color: "ขาวครีม",
          image:
            "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
        },
        {
          id: 2,
          name: "ลูกโป่ง",
          breed: "British Shorthair",
          age: "3 ปี",
          color: "เทา",
          image:
            "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=400",
        },
      ]);
    }
  }, [isLoggedIn, myCats.length, setMyCats]);

  // Handler Login Success ใช้ useCallback เพื่อความเร็ว ไม่สร้างฟังก์ชันใหม่ทุกครั้ง
  const handleLoginSuccess = useCallback(
    (userData) => {
      setUserData(userData);
      setIsLoggedIn(true);
      setLoginOpen(false);
    },
    [setUserData, setIsLoggedIn]
  );

  const handleSwitchToRegister = useCallback(() => {
    setLoginOpen(false);
    setRegisterOpen(true);
  }, []);

  const handleSwitchToLogin = useCallback(() => {
    setRegisterOpen(false);
    setLoginOpen(true);
  }, []);

  return (
    <div>
      {/* Minimal Header */}
      <header className="border-b border-[#E8DCC8] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#6F5638] rounded-lg flex items-center justify-center">
                <Cat className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#8B6F47]">Everyday</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="home"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                Home
              </a>
              <a
                href="rooms"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                Rooms
              </a>
              <a
                href="about"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                About
              </a>
              <a
                href="contact"
                className="text-sm text-[#8B6F47] hover:text-[#6F5638]"
              >
                Contact
              </a>
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
      {children}
      {/* Footer - Minimal */}
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
              <a href="#home" className="hover:text-[#8B6F47]">
                Home
              </a>
              <a href="#rooms" className="hover:text-[#8B6F47]">
                Rooms
              </a>
              <a href="#about" className="hover:text-[#8B6F47]">
                About
              </a>
              <a href="#contact" className="hover:text-[#8B6F47]">
                Contact
              </a>
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

export default Layout;
