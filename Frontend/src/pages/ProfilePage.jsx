import { Cat } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export default function ProfilePage() {
  const { userData, myCats, logout } = useAuthStore();
  const navigate = useNavigate();

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
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-[#8B6F47] text-3xl mb-6 flex items-center gap-2">
        <User className="w-7 h-7" />
        โปรไฟล์ของฉัน
      </h1>

      {/* User Info */}
      <Card className="p-6 mb-8 bg-[#FAF8F5] border-[#E8DCC8]">
        <h2 className="text-lg text-[#8B6F47] mb-4">ข้อมูลผู้ใช้</h2>

        <div className="space-y-2 text-[#A68A64]">
          <p>📛 ชื่อ: {userData.firstName} {userData.lastName}</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {myCats.map((cat) => (
          <Card key={cat.id} className="p-4 bg-white border-[#E8DCC8]">
            {/* <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            /> */}
            <h3 className="text-[#8B6F47]">{cat.name}</h3>
            <p className="text-sm text-[#A68A64]">{cat.breed}</p>
            <p className="text-sm text-[#A68A64]">{cat.age}</p>
            <p className="text-sm text-[#A68A64]">{cat.color}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
