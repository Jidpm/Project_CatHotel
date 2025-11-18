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
  console.log(localStorage);
  const user = authStorage?.state?.userData || null;
  console.log("userId", user);
  const userId = user?.id;
  console.log("userId", userId);
  useEffect(() => {
    if (!userId) {
      console.log("❌ ไม่พบ userId");
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

        console.log("🐱 Data from backend:", data);

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
        <Card className="p-6 mb-8 bg-[#FAF8F5] border-[#E8DCC8]">
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
                    className="p-4 bg-white border-[#E8DCC8] shadow-sm hover:shadow-md transition rounded-lg"
                  >
                    <Cat className="text-[#8B6F47]"/>
                    {/* รูปแมว */}
                    <div className="w-full h-40 overflow-hidden">
                      รูปแมว
                      {/* <img
                        src={cat.image || "/default-cat.jpg"}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                    <h3 className="font-semibold text-lg text-[#8B6F47]">
                      {cat.name}
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

            {/* <div className="grid md:grid-cols-2 gap-4">
              <Card className="overflow-hidden border-[#E8DCC8] hover:shadow-lg transition-shadow">
                <div className="flex gap-4 p-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"> */}
            {/* <ImageWithFallback
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      /> */}
            {/* </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-0 gap-4 mt-4 text-[#A68A64]">
                      <Cat/>
                      {catsInfo.length > 0 ? (
                        catsInfo.map((cat) => (
                          <div
                            key={cat.id}
                            className="border p-2 rounded-lg bg-white shadow-sm "
                          >
                            <h3 className="font-semibold text-lg">
                              {cat.catName}
                            </h3>
                            <p>สายพันธุ์: {cat.breed}</p>
                            <p>อายุ: {cat.age}</p>
                            <p>ประวัติสุขภาพ: {cat.healthInfo}</p>
                          </div>
                        ))
                      ) : (
                        <p>ยังไม่มีข้อมูลแมว</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#8B6F47] hover:bg-[#F5EFE7]"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div> */}
          </TabsContent>

          {/* Booking History Tab */}
          <TabsContent value="bookings" className="space-y-4 mt-6">
            <h4 className="text-[#8B6F47] mb-4">ประวัติการจอง</h4>

            <div className="space-y-3">
              {/* bookingHistory.map((booking) => ( */}
              <Card className="border-[#E8DCC8] hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="text-[#8B6F47] mb-1">Booking room name</h5>
                      <p className="text-sm text-[#A68A64]">
                        รหัสการจอง: booking id
                      </p>
                    </div>
                    {/* <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === "เสร็จสิ้น"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        booking status
                        {booking.status}
                      </span> */}
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
                    {/* {booking.status === "กำลังจอง" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-400 text-red-600 hover:bg-red-50"
                        >
                          ยกเลิกการจอง
                        </Button>
                      )} */}
                  </div>
                </div>
              </Card>
              {/* )) */}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* {myCats.map((cat) => (
            <Card key={cat.id} className="p-4 bg-white border-[#E8DCC8]">
              <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
              <h3 className="text-[#8B6F47]">{cat.name}</h3>
              <p className="text-sm text-[#A68A64]">{cat.breed}</p>
              <p className="text-sm text-[#A68A64]">{cat.age}</p>
              <p className="text-sm text-[#A68A64]">{cat.color}</p>
            </Card>
          ))} */}
        </div>
      </div>
    </>
  );
}

// <div className="w-full min-h-screen bg-[#FAF7F2] flex justify-center py-12">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-[600px]">

//         <h2 className="text-2xl font-bold mb-6 text-[#5C3A21]">
//           เพิ่มข้อมูลน้องแมว
//         </h2>

//         <form onSubmit={()=>{}} className="space-y-5">

//           <div>
//             <label className="block text-sm font-medium text-[#5C3A21]">
//               ชื่อแมว
//             </label>
//             <input
//               type="text"
//               name="catName"
//               value={()=>{}}
//               onChange={()=>{}}
//               className="w-full mt-1 p-2 rounded-lg border"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-[#5C3A21]">
//               อายุ
//             </label>
//             <input
//               type="number"
//               name="age"
//               value={()=>{}}
//               onChange={()=>{}}
//               className="w-full mt-1 p-2 rounded-lg border"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-[#5C3A21]">
//               สายพันธุ์
//             </label>
//             <input
//               type="text"
//               name="breed"
//               value={()=>{}}
//               onChange={()=>{}}
//               className="w-full mt-1 p-2 rounded-lg border"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={()=>{}}
//             className="w-full bg-[#A9825A] text-white py-2 rounded-lg hover:bg-[#876A4A] transition"
//           >
//             {/* {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"} */}
//           </button>

//         </form>
//       </div>
//     </div>
