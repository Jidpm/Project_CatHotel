export default function BookingSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 border border-[#E8DCC8] text-center">
        <h1 className="text-2xl text-[#8B6F47] font-bold mb-4">
          🎉 การจองสำเร็จแล้ว!
        </h1>
        <p className="text-[#A68A64] mb-6">
          ขอบคุณที่ไว้วางใจให้เราดูแลน้องแมวนะคะ ♥
        </p>

        <a
          href="/"
          className="px-6 py-2 bg-[#8B6F47] text-white rounded-lg hover:bg-[#6F5638]"
        >
          กลับสู่หน้าแรก
        </a>
      </div>
    </div>
  );
}
