import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Check, Calendar, Users, Maximize2 } from "lucide-react";

export default function RoomDetailPage() {
  const { slug } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`http://localhost:8900/api/info/roomtype/${slug}`);
        const data = await res.json();

        if (res.ok) {
          setRoom(data);
        } else {
          setRoom(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [slug]);

  if (loading) return <p className="p-10">กำลังโหลดข้อมูล...</p>;
  if (!room) return <p className="p-10">ไม่พบข้อมูลห้องพัก</p>;

  return (
    <div className="max-w-5xl mx-auto w-[95vw] mt-10 mb-20 bg-white rounded-xl shadow-md overflow-hidden">

      {/* Image Section */}
      <div className="relative bg-black">
        <div className="relative h-[50vh] md:h-[55vh] overflow-hidden">
          {/* รูปใหญ่ URL ดึงจาก database */}
          {/* <img
            src={room.images?.[currentImageIndex]?.url}
            alt={room.name}
            className="w-full h-full object-contain bg-black"
          /> */}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {/* {room.popular && (
              <Badge className="bg-[#F5EFE7] text-[#8B6F47] border-[#D4B896]">
                ยอดนิยม
              </Badge>
            )} */}
            <Badge className="bg-[#F5EFE7] text-[#8B6F47] border-[#D4B896]">
                ยอดนิยม
              </Badge>

            {/* {room.recommended && (
              <Badge className="bg-[#8B6F47] text-white">แนะนำ</Badge>
            )}
            {room.premium && (
              <Badge className="bg-[#8B6F47] text-white">Premium</Badge>
            )} */}
            
          </div>
        </div>

        {/* Thumbnail */}
        <div className="flex gap-2 p-4 bg-[#FAF8F5] overflow-x-auto">
          {/* {room.images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? "border-[#8B6F47] scale-105"
                  : "border-[#E8DCC8] hover:border-[#D4B896]"
              }`}
            >
              <img src={image.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))} */}
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
             size room เพิ่มใน dataBase 

            </div>

            <div className="flex items-center gap-2 text-[#8B6F47]">
              <Users className="w-4 h-4" />
              <span className="text-sm">{room.capacity}</span>
              เพิ่มใน dataBase
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

            <Button className="bg-[#8B6F47] hover:bg-[#6F5638] text-white w-full sm:w-auto">
              <Calendar className="w-4 h-4 mr-2" />
              จองห้องนี้
            </Button>
            <Button className="bg-[#8B6F47] hover:bg-[#6F5638] text-white w-full sm:w-auto">
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
    </div>
  );
}

