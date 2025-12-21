import { Edit } from "lucide-react";
import { useEffect, useState } from "react";

export default function UpdateProfileDialog({
  open,
  onClose,
  user,
  onSuccess,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const profileImg = "https://www.svgrepo.com/show/34292/girl.svg";

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPhoneNumber(user.phoneNumber || "");
      setAddress(user.address || "");
    }
  }, [user]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8900/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          address,
        }),
      });

      if (!res.ok) throw new Error("Update failed");

      const data = await res.json();
      onSuccess(data.user);
      onClose(); // ปิด dialog
    } catch (err) {
      console.error(err);
      alert("บันทึกไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40
     ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-[#FFF8F1] p-6 shadow-lg"
      >
        <h2 className="mb-4 text-center text-xl font-semibold text-[#6B4F3F]">
          แก้ไขข้อมูลส่วนตัว
        </h2>

        <div className="relative w-40 h-40 mx-auto mb-4">

        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover items-center mx-auto mb-4"
        />
        <button
          onClick={() => {}}
          className="absolute top-1 right-1
               w-9 h-9 rounded-full
               bg-[#8B6B4F] text-white
               flex items-center justify-center
               shadow-md hover:bg-[#75563E] cursor-pointer"
        >
          <Edit className="w-4 h-4" />
        </button>
        </div>

        <div className="space-y-3">
          <span className="text-sm text-[#8B6F47]">ชื่อ</span>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="ชื่อ"
            className="w-full rounded-lg border px-3 py-2 text-[#705837]"
          />
          <span className="text-sm text-[#8B6F47]">นามสกุล</span>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="นามสกุล"
            className="w-full rounded-lg border px-3 py-2 text-[#705837]"
          />

          <span className="text-sm text-[#8B6F47]">เบอร์โทร</span>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="เบอร์โทร"
            className="w-full rounded-lg border px-3 py-2 text-[#705837]"
          />
          <span className="text-sm text-[#8B6F47]">ที่อยู่</span>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="ที่อยู่"
            rows="3"
            className="w-full rounded-lg border px-3 py-2 text-[#705837]"
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-[#705837] cursor-pointer hover:bg-[#E8DCC8]"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-lg bg-[#8B6A4F] px-5 py-2 text-white cursor-pointer hover:bg-[#6F5638] disabled:opacity-50"
          >
            {loading ? "กำลังบันทึก..." : "บันทึก"}
          </button>
        </div>
      </div>
    </div>
  );
}
