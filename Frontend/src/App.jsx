import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Cat } from "lucide-react";
import { Award } from "lucide-react";
import { Users } from "lucide-react";
import { Clock } from "lucide-react";
import { Star } from "lucide-react";
import { Shield } from "lucide-react";
import { Heart } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { User } from "lucide-react";
import { LoginDialog } from "./components/LoginDialog";
import { RegisterDialog } from "./components/RegisterDialog";
import { RoomDetailDialog } from "./components/RoomDetailDialog";
import { BookingDialog } from "./components/BookingDialog";
import { getMe } from "./api/auth";
import ProfilePage from "./pages/ProfilePage";

export default function App() {

  const navigate = useNavigate();

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [roomDetailOpen, setRoomDetailOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  // const [profileOpen, setProfileOpen] = useState(false);
  // const [editProfileOpen, setEditProfileOpen] = useState(false);
  // const [addCatOpen, setAddCatOpen] = useState(false);

  // const [pendingBookingData, setPendingBookingData] = useState(null);

  // Login state
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler Login Success ใช้ useCallback เพื่อความเร็ว ไม่สร้างฟังก์ชันใหม่ทุกครั้ง
  const handleLoginSuccess = useCallback((userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
    setLoginOpen(false);
    // setProfileOpen(true);
  }, []);
  console.log("🔄 App Rendered | isLoggedIn =", isLoggedIn);

  // Handle logout
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("token");
    navigate("/");
  }, [navigate]);
  // const handleLogout = useCallback(() => {
  //   setIsLoggedIn(false);
  //   setUserData(null);
  //   setProfileOpen(false);
  //   // Scroll to top
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  // Handle edit profile
  // const handleEditProfile = useCallback(() => {
  //   setProfileOpen(false);
  //   setEditProfileOpen(true);
  // }, []);

  const handleSwitchToRegister = useCallback(() => {
    setLoginOpen(false);
    setRegisterOpen(true);
  }, []);

  const handleSwitchToLogin = useCallback(() => {
    setRegisterOpen(false);
    setLoginOpen(true);
  }, []);

  // Handle add cat
  const handleAddCat = useCallback(() => {
    setProfileOpen(false);
    setAddCatOpen(true);
  }, []);
  // // Handle save cat
  // const handleSaveCat = useCallback((newCat) => {
  //   setMyCats(prev => [...prev, newCat]);
  // }, []);

  //Handle BookThisroom
  const handleBookThisRoom = (room) => {
    // Check if user is logged in
    if (!isLoggedIn) {
      alert("⚠️ กรุณาเข้าสู่ระบบก่อนทำการจอง");
      setLoginOpen(true);
      return;
    }
    setSelectedRoom(room);
    setRoomDetailOpen(false);
    setBookingOpen(true);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setRoomDetailOpen(true);
  };

  // Cat data state
  const [myCats, setMyCats] = useState([
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


  const roomsData = [
    {
      id: "standard",
      name: "ห้องสแตนดาร์ด",
      nameEn: "Standard Room",
      price: 350,
      size: "2x3 เมตร",
      capacity: "เหมาะสำหรับแมว 1 ตัว",
      description:
        "ห้องพักขนาดกะทัดรัด เหมาะสำหรับแมว 1 ตัว พร้อมอุปกรณ์ครบครัน",
      images: [
        "https://images.unsplash.com/photo-1690335466277-7968a05daa74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjByZWxheGluZ3xlbnwxfHx8fDE3NjI0NDU3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: [
        "กระบะทราย Premium",
        "ต้นไม้แมวขนาดกลาง",
        "กล้องวงจรปิด CCTV",
        "ระบบปรับอากาศอัตโนมัติ",
      ],
    },
    {
      id: "deluxe",
      name: "ห้องดีลักซ์",
      nameEn: "Deluxe Room",
      price: 650,
      size: "3x4 เมตร",
      capacity: "เหมาะสำหรับแมว 1-2 ตัว",
      description: "ห้องพักขนาดกลาง พื้นที่กว้างขวาง พร้อมของเล่นหลากหลาย",
      images: [
        "https://images.unsplash.com/photo-1638826595775-e2eae86cda8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBwbGF5aW5nfGVufDF8fHx8MTc2MjQxNjU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: [
        "ทุกอย่างในห้องสแตนดาร์ด",
        "ต้นไม้แมวขนาดใหญ่ 2 ต้น",
        "พื้นที่เล่นส่วนตัว",
        "หน้าต่างวิวสวน",
      ],
    },
    {
      id: "suite",
      name: "ห้องสวีท",
      nameEn: "Suite Room",
      price: 950,
      size: "4x5 เมตร",
      capacity: "เหมาะสำหรับแมว 2-3 ตัว",
      description: "ห้องพักระดับพรีเมียม พร้อมบริการ VIP",
      images: [
        "https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGJlaWdlfGVufDF8fHx8MTc2MjQ4NDAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: [
        "ทุกอย่างในห้องดีลักซ์",
        "ห้องนอนแยก + ห้องเล่นแยก",
        "บริการ VIP",
        "ระเบียงส่วนตัว",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section - Full Width Image with Overlay */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1672764788664-9f5844477a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NjI0ODQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cat Hotel Hero"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
            <span className="text-sm">Premium Cat Hotel in Bangkok</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl">
            A Home Away
            <br />
            From Home
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            บ้านหลังที่สองสำหรับเจ้าขนปุย พร้อมบริการระดับพรีเมียม
            <br />
            ในบรรยากาศอบอุ่นที่น้องๆจะรักและคุณจะวางใจ
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-white cursor-pointer text-[#8B6F47] hover:bg-white/90">
              {/* <Calendar className="w-4 h-4 mr-2" /> */}
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="text-[#8B6F47] mb-2">10+ Years</h3>
              <p className="text-sm text-[#A68A64]">ประสบการณ์ดูแลแมว</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="text-[#8B6F47] mb-2">500+ Clients</h3>
              <p className="text-sm text-[#A68A64]">ครอบครัวที่ไว้วางใจ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="text-[#8B6F47] mb-2">24/7 Care</h3>
              <p className="text-sm text-[#A68A64]">ดูแลตลอดเวลา</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="text-[#8B6F47] mb-2">4.9/5.0</h3>
              <p className="text-sm text-[#A68A64]">คะแนนรีวิวเฉลี่ย</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms with Tabs */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#8B6F47] mb-4">Our Rooms</h2>
              <p className="text-[#A68A64]">
                ห้องพักที่ออกแบบมาเพื่อความสะดวกสบายของน้องๆ
              </p>
            </div>

            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-[#FAF8F5]">
                <TabsTrigger
                  value="standard"
                  className="data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white"
                >
                  Standard
                </TabsTrigger>
                <TabsTrigger
                  value="deluxe"
                  className="data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white"
                >
                  Deluxe
                </TabsTrigger>
                <TabsTrigger
                  value="suite"
                  className="data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white"
                >
                  Suite
                </TabsTrigger>
              </TabsList>

              <TabsContent value="standard">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden">
                    {/* <ImageWithFallback
                      src="https://images.unsplash.com/photo-1690335466277-7968a05daa74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjByZWxheGluZ3xlbnwxfHx8fDE3NjI0NDU3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Standard Room"
                      className="w-full h-[400px] object-cover"
                    /> */}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#8B6F47] mb-2">Standard Room</h3>
                      <p className="text-[#A68A64]">
                        ห้องพักขนาดกะทัดรัด เหมาะสำหรับแมว 1 ตัว
                        พร้อมอุปกรณ์ครบครัน
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Cat className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">พื้นที่ 2x3 เมตร</p>
                          <p className="text-sm text-[#A68A64]">
                            เหมาะสำหรับแมว 1 ตัว
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">กล้องวงจรปิด</p>
                          <p className="text-sm text-[#A68A64]">
                            ตรวจสอบได้ตลอดเวลา
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Heart className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">อุปกรณ์ครบครัน</p>
                          <p className="text-sm text-[#A68A64]">
                            กระบะทราย, ชามน้ำ, ต้นไม้แมว
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-[#8B6F47]">฿350</span>
                        <span className="text-[#A68A64]"> / วัน</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7] cursor-pointer"
                        onClick={() => handleRoomClick(roomsData[0])}
                      >
                        More Detail
                      </Button>
                      <Button
                        className="bg-[#8B6F47] hover:bg-[#6F5638] text-white cursor-pointer"
                        onClick={() => handleBookThisRoom(roomsData[0])}
                      >
                        Book This Room
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="deluxe">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden">
                    {/* <ImageWithFallback
                      src="https://images.unsplash.com/photo-1638826595775-e2eae86cda8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBwbGF5aW5nfGVufDF8fHx8MTc2MjQxNjU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Deluxe Room"
                      className="w-full h-[400px] object-cover"
                    /> */}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#8B6F47] mb-2">Deluxe Room</h3>
                      <p className="text-[#A68A64]">
                        ห้องพักขนาดใหญ่ เหมาะสำหรับแมว 1-2 ตัว
                        พร้อมพื้นที่เล่นและพักผ่อน
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Cat className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">พื้นที่ 3x4 เมตร</p>
                          <p className="text-sm text-[#A68A64]">
                            เหมาะสำหรับแมว 1-2 ตัว
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">หน้าต่างวิวสวน</p>
                          <p className="text-sm text-[#A68A64]">
                            น้องๆชอบนอนมองวิว
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Heart className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">พื้นที่เล่นส่วนตัว</p>
                          <p className="text-sm text-[#A68A64]">
                            ต้นไม้แมวขนาดใหญ่และของเล่น
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-[#8B6F47]">฿650</span>
                        <span className="text-[#A68A64]"> / วัน</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7] cursor-pointer"
                        onClick={() => handleRoomClick(roomsData[1])}
                      >
                        More Detail
                      </Button>
                      <Button
                        className="bg-[#8B6F47] hover:bg-[#6F5638] text-white"
                        onClick={() => handleBookThisRoom(roomsData[1])}
                      >
                        Book This Room
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="suite">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden">
                    {/* <ImageWithFallback
                      src="https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGJlaWdlfGVufDF8fHx8MTc2MjQ4NDAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Suite Room"
                      className="w-full h-[400px] object-cover"
                    /> */}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#8B6F47] mb-2">Suite Room</h3>
                      <p className="text-[#A68A64]">
                        ห้องพักระดับพรีเมียม เหมาะสำหรับแมว 2-3 ตัว พร้อมบริการ
                        VIP
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Cat className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">พื้นที่ 4x5 เมตร</p>
                          <p className="text-sm text-[#A68A64]">
                            เหมาะสำหรับแมว 2-3 ตัว
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">ห้องนอนแยก</p>
                          <p className="text-sm text-[#A68A64]">
                            พื้นที่เล่นและพื้นที่พักผ่อนแยกกัน
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Star className="w-4 h-4 text-[#8B6F47]" />
                        </div>
                        <div>
                          <p className="text-[#8B6F47]">บริการ VIP</p>
                          <p className="text-sm text-[#A68A64]">
                            อาหารพิเศษและดูแลเป็นพิเศษ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-[#8B6F47]">฿950</span>
                        <span className="text-[#A68A64]"> / วัน</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7] cursor-pointer"
                        onClick={() => handleRoomClick(roomsData[2])}
                      >
                        More Detail
                      </Button>
                      <Button
                        className="bg-[#8B6F47] hover:bg-[#6F5638] text-white"
                        onClick={() => handleBookThisRoom(roomsData[2])}
                      >
                        Book This Room
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalist Cards */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#8B6F47] mb-4">Additional Services</h2>
            <p className="text-[#A68A64]">บริการเสริมเพื่อความสุขของน้องๆ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="p-6 bg-white border-[#E8DCC8] hover:border-[#8B6F47] transition-colors">
              <Heart className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-[#8B6F47] mb-2">บริการอาบน้ำ</h3>
              <p className="text-sm text-[#A68A64] mb-4">
                อาบน้ำและแปรงขนโดยผู้เชี่ยวชาญ
              </p>
              <span className="text-[#8B6F47]">฿250</span>
            </Card>

            <Card className="p-6 bg-white border-[#E8DCC8] hover:border-[#8B6F47] transition-colors">
              <Shield className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-[#8B6F47] mb-2">ตรวจสุขภาพ</h3>
              <p className="text-sm text-[#A68A64] mb-4">
                ตรวจสุขภาพโดยสัตวแพทย์
              </p>
              <span className="text-[#8B6F47]">฿500</span>
            </Card>

            <Card className="p-6 bg-white border-[#E8DCC8] hover:border-[#8B6F47] transition-colors">
              <Cat className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-[#8B6F47] mb-2">เวลาเล่นพิเศษ</h3>
              <p className="text-sm text-[#A68A64] mb-4">
                เล่นกับน้อง 1 ชั่วโมง
              </p>
              <span className="text-[#8B6F47]">฿150</span>
            </Card>

            <Card className="p-6 bg-white border-[#E8DCC8] hover:border-[#8B6F47] transition-colors">
              {/* <Calendar className="w-10 h-10 text-[#8B6F47] mb-4" /> */}
              <h3 className="text-[#8B6F47] mb-2">รับส่งถึงบ้าน</h3>
              <p className="text-sm text-[#A68A64] mb-4">
                บริการรับส่งในเขตใกล้เคียง
              </p>
              <span className="text-[#8B6F47]">฿300</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#8B6F47] mb-4">Get In Touch</h2>
              <p className="text-[#A68A64]">
                ติดต่อเราเพื่อจองหรือสอบถามข้อมูลเพิ่มเติม
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Phone</h3>
                  <p className="text-sm text-[#A68A64]">02-XXX-XXXX</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Email</h3>
                  <p className="text-sm text-[#A68A64]">
                    info@everydaycathotel.com
                  </p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <MapPin className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Location</h3>
                  <p className="text-sm text-[#A68A64]">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <RoomDetailDialog
        open={roomDetailOpen}
        onOpenChange={setRoomDetailOpen}
        room={selectedRoom}
        onBookNow={handleBookThisRoom}
      />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        room={selectedRoom}
        myCats={myCats}
        userData={userData}
      />
      
      {/* <ProfilePage
      userData={userData}
      myCats={myCats}
      onLogout={handleLogout}
      /> */}
      {/* <ProfileDialog
        open={profileOpen}
        onOpenChange={setProfileOpen}
        userData={userData}
        onLogout={handleLogout}
        myCats={myCats}
        // onEditProfile={handleEditProfile}
        onAddCat={handleAddCat}
      /> */}
    </div>
  );
}
