import { useState } from "react";

import {registerUser} from "../api/registerUser";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";


export function RegisterForm(){
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: ""
  }
   const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // ตรวจว่ารหัสผ่านตรงกันไหม
  if (formData.password !== formData.confirmPassword) {
    alert("รหัสผ่านไม่ตรงกัน กรุณาลองใหม่อีกครั้ง");
    return;
  }
  try {
    const res = await registerUser(formData);
    alert(res.message || "สมัครสมาชิกสำเร็จ!");
    // onOpenChange(false);
  } catch (error) {
    //ดัก error จาก backend
    console.error("Registration failed", error);
    alert(error.message || "สมัครสมาชิกไม่สำเร็จ กรุณาลองใหม่");
  }finally{
    setFormData(initialState)
  }
};


//ล้างฟอร์ม register setstate "" 

   //ตัวช่วยอัปเดตค่าใน state แบบ dynamic  ***  
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


   
    return (
         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* <RegisterForm/> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#8B6F47]">
                ชื่อ <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="ชื่อ"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#8B6F47]">
                นามสกุล <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="นามสกุล"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#8B6F47]">
              อีเมล <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-[#8B6F47]">
              เบอร์โทรศัพท์ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="0XX-XXX-XXXX"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#8B6F47]">
              รหัสผ่าน <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
              minLength={8}
            />
            <p className="text-xs text-[#A68A64]">รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#8B6F47]">
              ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
              minLength={8}
            />
          </div>

          {/* Address */}
           <div className="space-y-2">
            <Label htmlFor="address" className="text-[#8B6F47]">
              ที่อยู่ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="your address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="pt-2 pb-2 px-4 bg-[#FAF8F5] rounded-lg border border-[#E8DCC8]">
            <p className="text-xs text-[#A68A64]">
              <span className="text-[#8B6F47]">📋 หมายเหตุ:</span> ข้อมูลของคุณจะถูกเก็บรักษาอย่างปลอดภัย 
              และใช้เพื่อวัตถุประสงค์ในการจองห้องพักเท่านั้น
            </p>
          </div>
              <Button
            type="submit"
            className="w-full bg-[#8B6F47] hover:bg-[#6F5638] text-white"
          >
            สมัครสมาชิก
          </Button>

        </form>
    )
}