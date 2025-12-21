import { Cat } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { History } from "lucide-react";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { userData, logout } = useAuthStore();
  const [catsInfo, setCatsInfo] = useState([]);
  const navigate = useNavigate();

  const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
  const user = authStorage?.state?.userData || null;
  const userId = user?.id;

  //ดึงข้อมูล user
  useEffect(() => {
    if (!userId) {
      alert("❌ ไม่พบ userId");
      return;
    }
    console.log(userId);
    // ดึงข้อมูลแมวจาก backend
    const fetchCats = async () => {
      try {
        const res = await fetch(
          `http://localhost:8900/api/info/catsinfo/${userId}`
        );
        const data = await res.json();
        // console.log("🐱 Data from backend:", data);
        setCatsInfo(data.cats || []);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/");
  };
  if (!userData) {
    return (
      <div className="text-center mt-20 text-[#8B6F47]">
        <p>กรุณาเข้าสู่ระบบก่อน</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mt-10">
        <h1 className="text-[#8B6F47] text-3xl mb-6 flex items-center gap-2">
          <User className="w-7 h-7" />
          โปรไฟล์ของฉัน
        </h1>

        {/* User Info */}
        <Card className="flex items-center justify-center p-6 mb-8 bg-[#FAF8F5] border-[#E8DCC8]">
          Profile Image
          <button className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white hover:bg-[#6F5638] transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <h2 className="text-lg text-[#8B6F47] mb-4">ข้อมูลผู้ใช้</h2>
          <div className="space-y-2 text-[#A68A64]">
            <p>
              📛 ชื่อ: {userData.firstName} {userData.lastName}
            </p>
            <p>📧 อีเมล: {userData.email}</p>
            <p>📱 โทร: {userData.phoneNumber || "—"}</p>
          </div>
          <Button
            onClick={handleLogout}
            className="mt-4 bg-[#8B6F47] hover:bg-[#6F5638] text-white"
          >
            ออกจากระบบ
          </Button>
        </Card>

        {/* My Cats */}
        <h2 className="text-lg text-[#8B6F47] mb-4 flex items-center gap-2">
          <Cat className="w-6 h-6" />
          แมวของฉัน
        </h2>
        {/* Tabs Section */}
        <Tabs defaultValue="cats" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#F5EFE7]">
            <TabsTrigger
              value="cats"
              className="data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white"
            >
              <Cat className="w-4 h-4 mr-2" />
              แมวของฉัน
            </TabsTrigger>
            <TabsTrigger
              value="bookings"
              className="data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white"
            >
              <History className="w-4 h-4 mr-2" />
              ประวัติการจอง
            </TabsTrigger>
          </TabsList>

          {/* My Cats Tab */}
          <TabsContent value="cats" className="space-y-4 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#8B6F47]">แมวของฉัน... ตัว</h4>
              <Button
                variant="outline"
                className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7]"
              >
                + เพิ่มข้อมูลแมว
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {catsInfo.length > 0 ? (
                catsInfo.map((cat) => (
                  <Card
                    key={cat.id}
                    className="relative p-4 bg-white border-[#E8DCC8] shadow-sm hover:shadow-md transition rounded-lg"
                  >
                    <button className="absolute top-3 right-3 w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white hover:bg-[#6F5638] transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    {/* รูปแมว */}
                    <div className="w-full h-40 overflow-hidden">
                      รูปแมว
                      {/* <img
                        src={cat.image || "/.jpg"}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                    <h3 className="font-semibold text-lg text-[#8B6F47]">
                      {cat.catName}
                    </h3>

                    <p className="text-sm text-[#A68A64] mt-2">
                      <strong>สายพันธุ์:</strong> {cat.breed}
                    </p>

                    <p className="text-sm text-[#A68A64]">
                      <strong>อายุ:</strong> {cat.age}
                    </p>

                    <p className="text-sm text-[#A68A64] mt-2 whitespace-pre-line">
                      <strong>ประวัติสุขภาพ:</strong> {cat.healthInfo}
                    </p>
                  </Card>
                ))
              ) : (
                <p>ยังไม่มีข้อมูลแมว</p>
              )}
            </div>
          </TabsContent>

          {/* Booking History Tab */}
          <TabsContent value="bookings" className="space-y-4 mt-6">
            <h4 className="text-[#8B6F47] mb-4">ประวัติการจอง</h4>

            <div className="space-y-3">
              <Card className="border-[#E8DCC8] hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="text-[#8B6F47] mb-1">Booking room name</h5>
                      <p className="text-sm text-[#A68A64]">
                        รหัสการจอง: booking id
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                    <div>
                      <p className="text-[#A68A64] mb-1">เช็คอิน</p>
                      <p className="text-[#8B6F47]">Booking check-in</p>
                    </div>
                    <div>
                      <p className="text-[#A68A64] mb-1">เช็คเอาท์</p>
                      <p className="text-[#8B6F47]">Booking check-out</p>
                    </div>
                    <div>
                      <p className="text-[#A68A64] mb-1">ยอดชำระ</p>
                      <p className="text-[#8B6F47]">฿ booking total</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7]"
                    >
                      ดูรายละเอียด
                    </Button>
                    {/* booking status */}
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
      </div>
    </>
  );
}
