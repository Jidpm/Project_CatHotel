import { useState } from "react";

import {registerUser} from "../api/registerUser";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";


export function RegisterForm(){
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //try,catch
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน กรุณาลองใหม่อีกครั้ง");
      return;
    }
    console.log('formData', formData)
    // Handle registration logic here
    console.log("Register:", formData);
    await registerUser(formData);
    alert("สมัครสมาชิกสำเร็จ!");
    // onOpenChange(false);
  };

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
            <Label htmlFor="phone" className="text-[#8B6F47]">
              เบอร์โทรศัพท์ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="0XX-XXX-XXXX"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
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
              minLength={6}
            />
            <p className="text-xs text-[#A68A64]">รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร</p>
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
              minLength={6}
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
        // <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        //     {/* แสดง API Error (ถ้ามี) */}
        //     { apiError && (
        //         <div className="pt-2 pb-2 px-4 bg-red-100 border border-red-300 rounded-lg">
        //             <p className="text-sm text-red-700 font-medium">❌ ข้อผิดพลาด: {apiError}</p>
        //         </div>
        //     )}
        //     <div className="grid grid-cols-2 gap-4">
        //         {/* First Name */}
        //         {/* <div className="space-y-2">
        //             <Label htmlFor="firstName" className="text-[#8B6F47]">ชื่อsssss</Label>
        //             <Input id="firstName" type="text" placeholder="ชื่อ" {...register("firstName")} required />
        //             {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
        //         </div> */}
        //         {/* Last Name */}
        //         {/* <div className="space-y-2">
        //             <Label htmlFor="lastName" className="text-[#8B6F47]">นามสกุล</Label>
        //             <Input id="lastName" type="text" placeholder="นามสกุล" {...register("lastName")} required />
        //             {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
        //         </div> */}
        //     </div>
        //     {/* Identity (Email/Phone) */}
        //     {/* <div className="space-y-2">
        //         <Label htmlFor="identity" className="text-[#8B6F47]">อีเมล หรือ เบอร์โทรศัพท์</Label>
        //         <Input id="identity" type="text" placeholder="your@email.com หรือ 0XX-XXX-XXXX" {...register("identity")} required />
        //         {errors.identity && <p className="text-xs text-red-500">{errors.identity.message}</p>}
        //     </div> */}

        //     {/* Password */}
        //     {/* <div className="space-y-2">
        //         <Label htmlFor="password" className="text-[#8B6F47]">รหัสผ่าน</Label>
        //         <Input id="password" type="password" placeholder="••••••••" {...register("password")} required />
        //         {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
        //     </div> */}

        //     {/* Confirm Password */}
        //     <div className="space-y-2">
        //         {/* <Label htmlFor="confirmPassword" className="text-[#8B6F47]">ยืนยันรหัสผ่าน</Label>
        //         <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} required />
        //         {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>} */}
        //         {/* Zod refine error สำหรับ confirmPassword จะอยู่ที่ errors.confirmPassword */}
        //     </div>
        //     {/* Address (อย่าลืมเพิ่ม Field นี้ตาม Zod Schema) */}
        //     {/* <div className="space-y-2">
        //         <Label htmlFor="address" className="text-[#8B6F47]">ที่อยู่</Label>
        //         <Input id="address" type="text" placeholder="กรอกที่อยู่ปัจจุบัน" {...register("address")} required />
        //         {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
        //     </div> */}


        //     <Button type="submit" className="w-full bg-[#8B6F47] hover:bg-[#6F5638] text-white" disabled={isSubmitting}>
        //         {isSubmitting ? 'กำลังลงทะเบียน...' : 'สมัครสมาชิก'}
        //     </Button>

        //     <div className="text-center text-sm text-[#A68A64]">
        //         มีบัญชีอยู่แล้ว?{" "}
        //         <button
        //             type="button"
        //             // onClick={onSwitchToLogin}
        //             className="text-[#8B6F47] hover:underline"
        //         >
        //             เข้าสู่ระบบ
        //         </button>
        //     </div>
        // </form>
    )
}