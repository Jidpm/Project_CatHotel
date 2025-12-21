import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  X,
  Check,
  Info,
  Cat as CatIcon,
} from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { useNavigate } from "react-router";

const additionalServices = [
  { id: "bath", name: "บริการอาบน้ำและแปรงขน", price: 250 },
  { id: "health", name: "ตรวจสุขภาพโดยสัตวแพทย์", price: 500 },
  { id: "play", name: "พาน้องเดินเล่น (2 ชั่วโมง/วัน)", price: 150 },
  { id: "pickup", name: "บริการรับส่งถึงบ้าน", price: 300 },
];

export function BookingDialog({ room, open, onOpenChange }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [selectedServices, setSelectedServices] = useState([]);

  //fetch user data and cats
  const [user, setUser] = useState(null);
  const [cats, setCats] = useState([]);
  const [loadingUser, setLoadingUser] = useState(false);

  // Form data - now auto-filled from userData
  const [selectedCatIds, setSelectedCatIds] = useState([]);
  const [specialNotes, setSpecialNotes] = useState("");

  if (!room) return null;

  useEffect(() => {
    if (!open) return;

    const fetchBookingInfo = async () => {
      try {
        setLoadingUser(true);

        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found");
          return;
        }

        // 🔹 1. fetch user profile
        const userRes = await fetch("http://localhost:8900/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userRes.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await userRes.json();

        const user = data.user;

        setUser({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          id: user.id, // เพิ่ม userId เพื่อนำไป fetch cat info
        });

        // 🔹 2. fetch cat info ด้วย userId จาก profile
        const catRes = await fetch(
          `http://localhost:8900/api/info/catsinfo/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!catRes.ok) {
          throw new Error("Failed to fetch cat info");
        }

        const catData = await catRes.json();
        setCats(catData.cats || []);
      } catch (err) {
        console.error("fetch booking info error:", err);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchBookingInfo();
  }, [open]);

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const diff =
      new Date(checkOut).setHours(0, 0, 0, 0) -
      new Date(checkIn).setHours(0, 0, 0, 0);

    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  };

  const handleServiceToggle = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((id) => id !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate เดิม ใช้ได้แล้ว
    if (!checkIn || !checkOut) {
      alert("กรุณาเลือกวันที่เข้า-ออก");
      return;
    }

    if (calculateNights() <= 0) {
      alert("วันที่ออกต้องหลังจากวันที่เข้า");
      return;
    }

    if (selectedCatIds.length === 0) {
      alert("กรุณาเลือกน้องแมว");
      return;
    }

    // payload สำหรับ backend
    const payload = {
      checkInDate: checkIn,
      checkOutDate: checkOut,
      totalPrice: totalPrice,
      bookingStatus: "PENDING",
      services: selectedServices,

      rooms: [
        {
          roomtypeId: room.id,
          quantity: 1,
        },
      ],
      cats: selectedCatIds,
    };

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8900/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Create booking failed");
      }

      const data = await res.json();
      console.log("Booking saved:", data);

      onOpenChange(false); // ปิด dialog เมื่อสำเร็จ
      navigate("/booking-success");
    } catch (err) {
      console.error("Create booking error:", err);
      alert("เกิดข้อผิดพลาดในการจอง");
    }
  };

  const toggleCat = (catId) => {
    setSelectedCatIds((prev) => {
      // เอาออก
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId);
      }

      // จำกัดจำนวน
      if (prev.length >= room.maxCats) {
        alert(`ห้องนี้ฝากได้สูงสุด ${room.maxCats} ตัว`);
        return prev;
      }

      // เพิ่ม
      return [...prev, catId];
    });
  };

  const totalCats = selectedCatIds.length;

  const nights = calculateNights();
  const roomPricePerNight = Number(room?.price ?? 0);
  const roomCost = roomPricePerNight * nights;
  const extraCats = Math.max(0, totalCats - 1);
  const extraCatPrice = Number(room.extraCatPrice ?? 0);
  const extraCatCost = extraCats * extraCatPrice * nights;

  const serviceTotal = selectedServices.reduce((sum, name) => {
    const s = additionalServices.find((x) => x.name === name);
    return sum + Number(s?.price ?? 0);
  }, 0);

  const totalPrice = roomCost + extraCatCost + serviceTotal;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-[#FAF8F5] p-2 hover:bg-[#F5EFE7] transition-colors"
        >
          <X className="w-5 h-5 text-[#8B6F47]" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-[#8B6F47]">จองห้องพัก</DialogTitle>
          <DialogDescription className="text-[#A68A64]">
            {room.name} - ฿{room.price}/วัน
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-[#8B6F47] flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center text-white text-sm">
                1
              </div>
              ข้อมูลผู้จอง
            </h3>

            <div className="grid md:grid-cols-2 gap-4 px-8">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-[#8B6F47]">
                  ชื่อ-นามสกุล <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerName"
                  value={user ? `${user.firstName} ${user.lastName}` : ""}
                  className="border-[#D4B896] bg-[#F5EFE7] text-[#8B6F47]"
                  disabled
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerEmail" className="text-[#8B6F47]">
                  อีเมล <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={user?.email || ""}
                  className="border-[#D4B896] bg-[#F5EFE7] text-[#8B6F47]"
                  disabled
                  readOnly
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="customerPhone" className="text-[#8B6F47]">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  value={user?.phoneNumber || ""}
                  className="border-[#D4B896] bg-[#F5EFE7] text-[#8B6F47]"
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Cat Information */}
          <div className="space-y-4">
            <h3 className="text-[#8B6F47] flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center text-white text-sm">
                2
              </div>
              ข้อมูลน้องแมว
            </h3>

            <div className="grid md:grid-cols-3 gap-4 px-8">
              <div className="space-y-2 md:col-span-3">
                <div className="space-y-2">
                  <Label className="text-[#8B6F47]">
                    ชื่อน้องแมว <span className="text-red-500">*</span>
                  </Label>

                  {cats.length > 0 ? (
                    <div className="space-y-2">
                      {cats.map((cat) => (
                        <div
                          key={cat.id}
                          className="w-full flex items-center gap-4 p-4 rounded-lg border border-[#E6D8C3] bg-[#FAF8F5]"
                        >
                          <Checkbox
                            checked={selectedCatIds.includes(cat.id)}
                            onCheckedChange={() => toggleCat(cat.id)}
                          />

                          <span className="text-[#8B6F47] flex items-center gap-2">
                            <CatIcon className="w-4 h-4" />
                            {cat.catName} ({cat.breed}, {cat.age})
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#A68A64]">ยังไม่มีข้อมูลแมว</p>
                  )}
                </div>
              </div>

              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="specialNotes" className="text-[#8B6F47]">
                  หมายเหตุพิเศษ
                </Label>
                <Textarea
                  id="specialNotes"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="อาหารที่แพ้, โรคประจำตัว, พฤติกรรมพิเศษ หรือข้อมูลอื่นๆที่ควรทราบ"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5] min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-4">
            <h3 className="text-[#8B6F47] flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center text-white text-sm">
                3
              </div>
              เลือกวันที่เข้า-ออก
            </h3>

            <div className="grid md:grid-cols-2 gap-4 px-8">
              <div className="space-y-2">
                <Label className="text-[#8B6F47]">
                  วันที่เข้า <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left border-[#D4B896] hover:bg-[#FAF8F5] bg-[#FAF8F5]"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[#8B6F47]" />
                      {checkIn ? (
                        <span className="text-[#8B6F47]">
                          {format(checkIn, "PPP", { locale: th })}
                        </span>
                      ) : (
                        <span className="text-[#A68A64]">เลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-[#8B6F47]">
                  วันที่ออก <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left border-[#D4B896] hover:bg-[#FAF8F5] bg-[#FAF8F5]"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[#8B6F47]" />
                      {checkOut ? (
                        <span className="text-[#8B6F47]">
                          {format(checkOut, "PPP", { locale: th })}
                        </span>
                      ) : (
                        <span className="text-[#A68A64]">เลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {nights > 0 && (
              <div className="pl-8 p-3 bg-[#F5EFE7] rounded-lg">
                <p className="text-[#8B6F47] text-sm">
                  ระยะเวลาพัก:{" "}
                  <span className="font-semibold">{nights} คืน</span>
                </p>
              </div>
            )}
          </div>

          {/* Additional Services */}
          <div className="space-y-4 pr-8">
            <h3 className="text-[#8B6F47] flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center text-white text-sm">
                4
              </div>
              บริการเสริม (ถ้ามี)
            </h3>

            <div className="space-y-3 pl-8">
              {additionalServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-3 bg-[#FAF8F5] rounded-lg hover:bg-[#F5EFE7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={service.name}
                      checked={selectedServices.includes(service.name)}
                      onCheckedChange={() => handleServiceToggle(service.name)}
                      className="border-[#8B6F47] data-[state=checked]:bg-[#8B6F47]"
                    />
                    <Label
                      htmlFor={service.name}
                      className="text-[#8B6F47] cursor-pointer"
                    >
                      {service.name}
                    </Label>
                  </div>
                  <span className="text-[#8B6F47]">฿{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="border-t border-[#E8DCC8] pt-6">
            <h3 className="text-[#8B6F47] mb-4">สรุปการจอง</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#8B6F47]">
                <span>ห้องพัก ({nights} คืน)</span>
                <span>฿{roomCost}</span>
              </div>
              {extraCats > 0 && (
                <div className="flex justify-between text-sm text-[#8B6F47]">
                  <span>แมวเพิ่ม {extraCats} ตัว</span>
                  <span>฿{extraCatCost}</span>
                </div>
              )}

              {selectedServices.map((serviceName) => {
                const service = additionalServices.find(
                  (s) => s.name === serviceName
                );
                if (!service) return null;

                return (
                  <div
                    key={service.name}
                    className="flex justify-between text-[#8B6F47]"
                  >
                    <span>{service.name}</span>
                    <span>฿{service.price}</span>
                  </div>
                );
              })}

              <hr />
              <div className="flex justify-between font-semibold text-base text-[#8B6F47]">
                <span>ราคารวมทั้งหมด</span>
                <span>฿{totalPrice}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4 p-3 bg-[#FEF7E8] border border-[#E8DCC8] rounded-lg">
              <Info className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#8B6F47]">
                หลังจากกดยืนยัน ทางทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                เพื่อยืนยันการจองและแจ้งรายละเอียดการชำระเงิน
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-[#D4B896] text-[#8B6F47] hover:bg-[#FAF8F5]"
            >
              ยกเลิก
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#8B6F47] hover:bg-[#6F5638] text-white"
            >
              <Check className="w-4 h-4 mr-2" />
              ยืนยันการจอง
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
