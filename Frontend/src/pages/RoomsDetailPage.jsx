import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, Maximize2 } from "lucide-react";
import { useNavigate } from "react-router";
import { Cat } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export default function RoomDetailPage() {
  const { slug } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allRooms, setAllRooms] = useState([]); //set useState for info button Next room
  const [openBooking, setOpenBooking] = useState(false);
  const navigate = useNavigate();

  // ดึงห้องปัจจุบัน
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(
          `http://localhost:8900/api/info/roomtype/${slug}`
        );
        const data = await res.json();
        setRoom(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoom();
  }, [slug]);

  // ดึงทุกห้องเพื่อใช้ button next room
  useEffect(() => {
    const fetchAllRooms = async () => {
      try {
        const res = await fetch("http://localhost:8900/api/info/roomtype");
        const data = await res.json();
        setAllRooms(data.roomType); // สมมติข้อมูลห้องทั้งหมดอยู่ใน data.roomType
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRooms();
  }, []);

  // ปุ่ม: ดูห้องถัดไป
  const goToNextRoom = () => {
    if (!allRooms || !allRooms.length === 0) {
      return;
    }
    const currentIndex = allRooms.findIndex((room) => room.slug === slug);
    const nextIndex = (currentIndex + 1) % allRooms.length;

    const nextSlug = allRooms[nextIndex];

    navigate(`/roomtype/${nextSlug.slug}`);
  };

  if (loading) return <p className="p-10">กำลังโหลดข้อมูล...</p>;
  if (!room) return <p className="p-10">ไม่พบข้อมูลห้องพัก</p>;

  return (
    <div className="max-w-5xl mx-auto w-[95vw] mt-10 mb-20 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative bg-black">
        <div className="relative h-[50vh] md:h-[55vh] overflow-hidden">
          {room && (
            <img
              src={room.imageUrl}
              alt={room.roomType}
              className="w-full h-[600px] object-cover rounded-xl"
            />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-[#F5EFE7] text-[#8B6F47] border-[#D4B896]">
              ยอดนิยม
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 bg-white">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[#8B6F47] mb-2 text-xl">{room.roomType}</h2>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-[#8B6F47]">
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm">{room.size}</span>
            </div>

            <div className="flex items-center gap-2 text-[#8B6F47]">
              <Cat className="w-4 h-4" />
              <span className="text-sm">{room.capacity}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-[#8B6F47] mb-3">รายละเอียด</h3>
          <p className="text-[#A68A64] leading-relaxed">{room.description}</p>
        </div>

        {/* Price + Book button */}
        <div className="border-t border-[#E8DCC8] pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[#A68A64] mb-1">ราคาเริ่มต้น</p>
              <div className="flex items-baseline gap-1">
                <span className="text-[#8B6F47]">฿{room.roomPerNight}</span>
                <span className="text-sm text-[#A68A64]">/ วัน</span>
              </div>
            </div>

            <Button
              onClick={() => setOpenBooking(true)}
              className="bg-[#8B6F47] hover:bg-[#6F5638] text-white w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 mr-2" />
              จองห้องนี้
            </Button>
            <Button
              onClick={goToNextRoom}
              className="bg-[#8B6F47] hover:bg-[#6F5638] text-white w-full sm:w-auto"
            >
              ดูห้องถัดไป
            </Button>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-4 bg-[#FAF8F5] rounded-lg">
          <p className="text-sm text-[#A68A64]">
            💡 <span className="text-[#8B6F47]">หมายเหตุ:</span>{" "}
            ราคาอาจแตกต่างกันในช่วงวันหยุดและเทศกาล
          </p>
        </div>
      </div>
      <BookingDialog
        open={openBooking}
        onOpenChange={setOpenBooking}
        room={{
          id: room.id,
          name: room.roomType,
          price: room.roomPerNight,
        }}
      />
    </div>
  );
}
