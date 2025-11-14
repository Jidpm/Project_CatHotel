import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Calendar as CalendarIcon, X, Check, Info } from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

const additionalServices = [
  { id: "bath", name: "บริการอาบน้ำและแปรงขน", price: 250 },
  { id: "health", name: "ตรวจสุขภาพโดยสัตวแพทย์", price: 500 },
  { id: "play", name: "เล่นกับน้องพิเศษ (1 ชั่วโมง/วัน)", price: 150 },
  { id: "pickup", name: "บริการรับส่งถึงบ้าน", price: 300 },
];

export function BookingDialog({ room, open, onOpenChange }) {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [selectedServices, setSelectedServices] = useState([]);
  
  // Form data
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [catName, setCatName] = useState("");
  const [catAge, setCatAge] = useState("");
  const [catBreed, setCatBreed] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  if (!room) return null;

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Calculate total price
  const calculateTotal = () => {
    const nights = calculateNights();
    const roomTotal = room.price * nights;
    const servicesTotal = selectedServices.reduce((sum, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return sum + (service ? service.price : 0);
    }, 0);
    return roomTotal + servicesTotal;
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!checkIn || !checkOut) {
      alert("กรุณาเลือกวันที่เข้า-ออก");
      return;
    }
    
    if (calculateNights() <= 0) {
      alert("วันที่ออกต้องหลังจากวันที่เข้า");
      return;
    }

    // Here you would send the booking data to your backend
    const bookingData = {
      room: room.id,
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      cat: {
        name: catName,
        age: catAge,
        breed: catBreed,
      },
      checkIn,
      checkOut,
      nights: calculateNights(),
      services: selectedServices,
      total: calculateTotal(),
      specialNotes,
    };

    alert(`✅ จองห้องพักสำเร็จ!\n\nห้อง: ${room.name}\nระยะเวลา: ${calculateNights()} คืน\nราคารวม: ฿${calculateTotal().toLocaleString()}\n\nเราจะติดต่อกลับเพื่อยืนยันการจองภายใน 24 ชั่วโมง`);
    onOpenChange(false);
  };

  const nights = calculateNights();
  const total = calculateTotal();

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
          <p className="text-[#A68A64]">{room.name} - ฿{room.price}/วัน</p>
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
            
            <div className="grid md:grid-cols-2 gap-4 pl-8">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-[#8B6F47]">
                  ชื่อ-นามสกุล <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="กรอกชื่อ-นามสกุล"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerEmail" className="text-[#8B6F47]">
                  อีเมล <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="customerPhone" className="text-[#8B6F47]">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="08X-XXX-XXXX"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                  required
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
            
            <div className="grid md:grid-cols-3 gap-4 pl-8">
              <div className="space-y-2">
                <Label htmlFor="catName" className="text-[#8B6F47]">
                  ชื่อน้องแมว <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="catName"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="ชื่อน้อง"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="catAge" className="text-[#8B6F47]">
                  อายุ <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="catAge"
                  value={catAge}
                  onChange={(e) => setCatAge(e.target.value)}
                  placeholder="เช่น 2 ปี"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="catBreed" className="text-[#8B6F47]">
                  สายพันธุ์
                </Label>
                <Input
                  id="catBreed"
                  value={catBreed}
                  onChange={(e) => setCatBreed(e.target.value)}
                  placeholder="เช่น Scottish Fold"
                  className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                />
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
            
            <div className="grid md:grid-cols-2 gap-4 pl-8">
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
                  ระยะเวลาพัก: <span className="font-semibold">{nights} คืน</span>
                </p>
              </div>
            )}
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <h3 className="text-[#8B6F47] flex items-center gap-2">
              <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center text-white text-sm">
                4
              </div>
              บริการเสริม (ถ้ามี)
            </h3>
            
            <div className="space-y-3 pl-8">
              {additionalServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 bg-[#FAF8F5] rounded-lg hover:bg-[#F5EFE7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      className="border-[#8B6F47] data-[state=checked]:bg-[#8B6F47]"
                    />
                    <Label
                      htmlFor={service.id}
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
            
            <div className="space-y-2 bg-[#FAF8F5] p-4 rounded-lg">
              <div className="flex justify-between text-[#8B6F47]">
                <span>ห้องพัก ({nights} คืน)</span>
                <span>฿{(room.price * nights).toLocaleString()}</span>
              </div>
              
              {selectedServices.length > 0 && (
                <>
                  <div className="border-t border-[#E8DCC8] pt-2">
                    <p className="text-sm text-[#A68A64] mb-2">บริการเสริม:</p>
                    {selectedServices.map((serviceId) => {
                      const service = additionalServices.find(s => s.id === serviceId);
                      return service ? (
                        <div key={serviceId} className="flex justify-between text-sm text-[#8B6F47] ml-4">
                          <span>• {service.name}</span>
                          <span>฿{service.price}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </>
              )}
              
              <div className="border-t border-[#E8DCC8] pt-2 mt-2">
                <div className="flex justify-between text-[#8B6F47]">
                  <span>ราคารวมทั้งหมด</span>
                  <span>฿{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4 p-3 bg-[#FEF7E8] border border-[#E8DCC8] rounded-lg">
              <Info className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#8B6F47]">
                หลังจากกดยืนยัน ทางทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง เพื่อยืนยันการจองและแจ้งรายละเอียดการชำระเงิน
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
