
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";
import { Cat } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { Input } from "./ui/input";


export function AddCatDialog({ open, onOpenChange, onAdd }) {
  const [catName, setCatName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [healthHistory, setHealthHistory] = useState("");
  const [imagePreview, setImagePreview] = useState("");
//   const [imageFile, setImageFile] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // Validate file type
//       if (!file.type.startsWith('image/')) {
//         alert('❌ กรุณาเลือกไฟล์รูปภาพเท่านั้น');
//         return;
//       }

//       // Validate file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         alert('❌ ขนาดไฟล์ต้องไม่เกิน 5MB');
//         return;
//       }

//     //   setImageFile(file);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newCat = {
      id: Date.now(), // Simple ID generation
      name: catName,
      breed,
      age,
      healthHistory,
      image: imagePreview || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400", // Use uploaded image or default
    };

    if (onAdd) {
      onAdd(newCat);
    }

    // Reset form
    setCatName("");
    setBreed("");
    setAge("");
    setHealthHistory("");
    setImagePreview("");
    // setImageFile(null);

    alert(`✅ เพิ่มข้อมูล "${catName}" เรียบร้อยแล้ว`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[#D4B896] max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-[#FAF8F5] p-2 hover:bg-[#F5EFE7] transition-colors"
        >
          <X className="w-5 h-5 text-[#8B6F47]" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-[#8B6F47] flex items-center gap-2">
            <Cat className="w-5 h-5" />
            เพิ่มข้อมูลแมว
          </DialogTitle>
          <DialogDescription className="text-[#A68A64]">
            กรอกข้อมูลน้องแมวของคุณเพื่อใช้ในการจองห้องพัก
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Image Upload Section */}
          <div className="space-y-2">
            <Label className="text-[#8B6F47]">
              รูปภาพแมว <span className="text-sm text-[#A68A64]">(ไม่บังคับ)</span>
            </Label>
            
            <div className="flex flex-col items-center gap-4">
              {/* Image Preview */}
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-[#FAF8F5] border-2 border-dashed border-[#D4B896] flex items-center justify-center">
                {/* {imagePreview ? (
                  <ImageWithFallback
                    src={imagePreview}
                    alt="Cat Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 text-[#D4B896] mx-auto mb-2" />
                    <p className="text-sm text-[#A68A64]">ไม่มีรูปภาพ</p>
                  </div>
                )} */}
              </div>

              {/* Upload Button */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-[#8B6F47] text-[#8B6F47] hover:bg-[#F5EFE7]"
                  onClick={() => document.getElementById('cat-image-upload').click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {/* {imagePreview ? 'เปลี่ยนรูป' : 'อัปโหลดรูปภาพ'} */}
                </Button>
                
                {/* {imagePreview && (
                  <Button
                    type="button"
                    variant="outline"
                    className="border-red-400 text-red-600 hover:bg-red-50"
                    onClick={() => {
                      setImagePreview("");
                      setImageFile(null);
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    ลบรูป
                  </Button>
                )} */}
              </div>

              <input
                id="cat-image-upload"
                type="file"
                accept="image/*"
                // onChange={handleImageChange}
                className="hidden"
              />

              <p className="text-xs text-[#A68A64] text-center">
                รองรับไฟล์: JPG, PNG, GIF (ไม่เกิน 5MB)
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cat-name" className="text-[#8B6F47]">
              ชื่อแมว <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cat-name"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              placeholder="เช่น มิว, ลูกโป่ง, น้องแมว"
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cat-breed" className="text-[#8B6F47]">
              สายพันธุ์ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cat-breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="เช่น Scottish Fold, British Shorthair, แมวไทย"
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cat-age" className="text-[#8B6F47]">
              อายุ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cat-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="เช่น 2 ปี, 6 เดือน, 1.5 ปี"
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cat-health" className="text-[#8B6F47]">
              ประวัติสุขภาพ <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="cat-health"
              value={healthHistory}
              onChange={(e) => setHealthHistory(e.target.value)}
              placeholder="กรุณาระบุ:&#10;- วัคซีนที่ได้รับ (เช่น วัคซีนพิษสุนัขบ้า, FPV, FHV)&#10;- โรคประจำตัว (ถ้ามี)&#10;- อาหารหรือยาที่แพ้ (ถ้ามี)&#10;- การทำหมัน (ทำแล้ว/ยังไม่ได้ทำ)&#10;- ข้อมูลสุขภาพอื่นๆ ที่สำคัญ"
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5] min-h-[120px]"
              required
            />
          </div>

          <div className="p-3 bg-[#FEF7E8] border border-[#E8DCC8] rounded-lg">
            <p className="text-sm text-[#8B6F47]">
              💡 <span className="font-medium">หมายเหตุ:</span> ข้อมูลประวัติสุขภาพจะช่วยให้เราดูแลน้องๆ ได้อย่างเหมาะสมและปลอดภัยที่สุด
            </p>
          </div>

          <div className="flex gap-3 pt-4">
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
              <Save className="w-4 h-4 mr-2" />
              บันทึก
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}