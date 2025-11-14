import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, Check, Calendar, Users, Maximize2 } from "lucide-react";
import { useState } from "react";

export function RoomDetailDialog({ room, open, onOpenChange, onBookNow }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) return null;

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow(room);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-white">
        {/* Hidden but accessible title and description for screen readers */}
        <DialogTitle className="sr-only">{room.name}</DialogTitle>
        <DialogDescription className="sr-only">
          รายละเอียดห้องพัก {room.name} - {room.description}
        </DialogDescription>

        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/90 p-2 shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-[#8B6F47]" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-[#8B6F47] scrollbar-track-[#FAF8F5]">
          {/* Image Gallery */}
          <div className="relative bg-black">
            <div className="relative h-[50vh] md:h-[55vh] overflow-hidden">
              {/* <ImageWithFallback
                src={room.images[currentImageIndex]}
                alt={`${room.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain bg-black"
              /> */}
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {room.popular && (
                  <Badge className="bg-[#F5EFE7] text-[#8B6F47] border-[#D4B896]">
                    ยอดนิยม
                  </Badge>
                )}
                {room.recommended && (
                  <Badge className="bg-[#8B6F47] text-white">แนะนำ</Badge>
                )}
                {room.premium && (
                  <Badge className="bg-[#8B6F47] text-white">Premium</Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 p-4 bg-[#FAF8F5] overflow-x-auto">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-[#8B6F47] scale-105"
                      : "border-[#E8DCC8] hover:border-[#D4B896]"
                  }`}
                >
                  {/* <ImageWithFallback
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  /> */}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 bg-white">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-[#8B6F47] mb-2">{room.name}</h2>
              <p className="text-[#A68A64]">{room.nameEn}</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-[#8B6F47]">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm">{room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-[#8B6F47]">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{room.capacity}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-[#8B6F47] mb-3">รายละเอียด</h3>
              <p className="text-[#A68A64] leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-[#8B6F47] mb-3">สิ่งอำนวยความสะดวก</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#F5EFE7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#8B6F47]" />
                    </div>
                    <span className="text-[#8B6F47] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-[#8B6F47] mb-3">อุปกรณ์ในห้อง</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="text-[#8B6F47] mb-3">อุปกรณ์ในห้อง</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* map with no picture */}
                    {(room.amenities || []).map((amenity, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 bg-[#FAF8F5] rounded-lg"
                      >
                        <span className="text-2xl mb-2">{amenity.icon}</span>
                        <span className="text-xs text-[#A68A64]">
                          {amenity.name}
                        </span>
                      </div>
                    ))} 
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Booking */}
            <div className="border-t border-[#E8DCC8] pt-6 mt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[#A68A64] mb-1">ราคาเริ่มต้น</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#8B6F47]">฿{room.price}</span>
                    <span className="text-sm text-[#A68A64]">/ วัน</span>
                  </div>
                </div>
                <Button
                  className="bg-[#8B6F47] hover:bg-[#6F5638] text-white w-full sm:w-auto"
                  onClick={handleBookNow}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  จองห้องนี้
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-[#FAF8F5] rounded-lg">
              <p className="text-sm text-[#A68A64]">
                💡 <span className="text-[#8B6F47]">หมายเหตุ:</span>{" "}
                ราคาอาจแตกต่างกันในช่วงวันหยุดและเทศกาล
                กรุณาติดต่อสอบถามเพื่อรับข้อมูลและโปรโมชั่นพิเศษ
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
