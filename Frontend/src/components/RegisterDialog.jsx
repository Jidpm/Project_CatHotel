
// import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { registerUser } from "../api/registerUser";
import { RegisterForm } from "../form/RegisterForm";
import { Button } from "./ui/button";


export function RegisterDialog({ open, onOpenChange, onSwitchToLogin }) {
  
  const handleSwitchToLogin = (e) => {
    e?.preventDefault();
    console.log("🔄 RegisterDialog: handleSwitchToLogin called");
    console.log("🔄 RegisterDialog: onSwitchToLogin exists?", !!onSwitchToLogin);
    if (onSwitchToLogin) {
      console.log("🔄 RegisterDialog: Calling onSwitchToLogin...");
      onSwitchToLogin();
    } else {
      console.error("❌ RegisterDialog: onSwitchToLogin is undefined!");
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[#D4B896] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#8B6F47]">สมัครสมาชิก</DialogTitle>
          <DialogDescription className="text-[#A68A64]">
            กรอกข้อมูลเพื่อสร้างบัญชีใหม่สำหรับการจองห้องพัก
          </DialogDescription>
        </DialogHeader>
       <RegisterForm/>
         
          <div className="text-center text-sm text-[#A68A64]">
            มีบัญชีอยู่แล้ว?{" "}
            <button
              type="button"
              onClick={handleSwitchToLogin}
              className="text-[#8B6F47] hover:underline"
            >
              เข้าสู่ระบบ
            </button>
          </div>
      </DialogContent>
    </Dialog>
  );
}

