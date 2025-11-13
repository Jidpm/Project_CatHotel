import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { User, Mail, Phone, MapPin, Calendar, Cat, LogOut, Edit, History } from "lucide-react";

export function ProfileDialog({ open, onOpenChange, userData, onLogout }) {
  // Mock booking history data
  const bookingHistory = [
    {
      id: "B001",
      roomName: "ห้องดีลักซ์",
      checkIn: "15 ม.ค. 2025",
      checkOut: "20 ม.ค. 2025",
      status: "เสร็จสิ้น",
      total: 3250,
    },
    {
      id: "B002",
      roomName: "ห้องสแตนดาร์ด",
      checkIn: "10 ธ.ค. 2024",
      checkOut: "13 ธ.ค. 2024",
      status: "เสร็จสิ้น",
      total: 1050,
    },
    {
      id: "B003",
      roomName: "ห้องสวีท",
      checkIn: "25 ก.พ. 2025",
      checkOut: "28 ก.พ. 2025",
      status: "กำลังจอง",
      total: 2850,
    },
  ];

  // Mock cat data
  const myCats = [
    {
      id: 1,
      name: "มิว",
      breed: "Scottish Fold",
      age: "2 ปี",
      color: "ขาวครีม",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
    },
    {
      id: 2,
      name: "ลูกโป่ง",
      breed: "British Shorthair",
      age: "3 ปี",
      color: "เทา",
      image: "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=400",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#8B6F47]">โปรไฟล์ของฉัน</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Info Section */}
          <Card className="p-6 bg-[#FAF8F5] border-[#E8DCC8]">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5638] flex items-center justify-center overflow-hidden">
                  {/* {userData?.profileImage ? (
                    <ImageWithFallback
                      src={userData.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )} */}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white hover:bg-[#6F5638] transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1">
                <h3 className="text-[#8B6F47] mb-4">{userData?.name || "สมชาย ใจดี"}</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-[#A68A64]">
                    <Mail className="w-5 h-5 text-[#8B6F47]" />
                    <span>{userData?.email || "somchai@example.com"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#A68A64]">
                    <Phone className="w-5 h-5 text-[#8B6F47]" />
                    <span>{userData?.phone || "081-234-5678"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#A68A64]">
                    <MapPin className="w-5 h-5 text-[#8B6F47]" />
                    <span>{userData?.address || "กรุงเทพมหานคร"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#A68A64]">
                    <Calendar className="w-5 h-5 text-[#8B6F47]" />
                    <span>สมาชิกตั้งแต่ ม.ค. 2024</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <Button
                    variant="outline"
                    className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7]"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    แก้ไขโปรไฟล์
                  </Button>
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    className="border-red-400 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    ออกจากระบบ
                  </Button>
                </div>
              </div>
            </div>
          </Card>

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
                <h4 className="text-[#8B6F47]">แมวของฉัน ({myCats.length} ตัว)</h4>
                <Button
                  variant="outline"
                  className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7]"
                >
                  + เพิ่มข้อมูลแมว
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {myCats.map((cat) => (
                  <Card key={cat.id} className="overflow-hidden border-[#E8DCC8] hover:shadow-lg transition-shadow">
                    <div className="flex gap-4 p-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        {/* <ImageWithFallback
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-[#8B6F47] mb-1">{cat.name}</h5>
                        <p className="text-sm text-[#A68A64] mb-2">สายพันธุ์: {cat.breed}</p>
                        <div className="flex gap-4 text-xs text-[#A68A64]">
                          <span>อายุ: {cat.age}</span>
                          <span>สี: {cat.color}</span>
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
                ))}
              </div>
            </TabsContent>

            {/* Booking History Tab */}
            <TabsContent value="bookings" className="space-y-4 mt-6">
              <h4 className="text-[#8B6F47] mb-4">ประวัติการจอง</h4>
              
              <div className="space-y-3">
                {bookingHistory.map((booking) => (
                  <Card key={booking.id} className="border-[#E8DCC8] hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-[#8B6F47] mb-1">{booking.roomName}</h5>
                          <p className="text-sm text-[#A68A64]">รหัสการจอง: {booking.id}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === "เสร็จสิ้น" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                        <div>
                          <p className="text-[#A68A64] mb-1">เช็คอิน</p>
                          <p className="text-[#8B6F47]">{booking.checkIn}</p>
                        </div>
                        <div>
                          <p className="text-[#A68A64] mb-1">เช็คเอาท์</p>
                          <p className="text-[#8B6F47]">{booking.checkOut}</p>
                        </div>
                        <div>
                          <p className="text-[#A68A64] mb-1">ยอดชำระ</p>
                          <p className="text-[#8B6F47]">฿{booking.total.toLocaleString()}</p>
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
                        {booking.status === "กำลังจอง" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-400 text-red-600 hover:bg-red-50"
                          >
                            ยกเลิกการจอง
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
