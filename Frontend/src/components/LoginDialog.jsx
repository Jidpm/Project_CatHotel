
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function LoginDialog({ open, onOpenChange, onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
    
    // Simulate successful login
    if (onLoginSuccess) {
      onLoginSuccess();
    }
    
    alert("เข้าสู่ระบบสำเร็จ!");
    onOpenChange(false);
  };

  const handleSwitchToRegister = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    if (typeof onSwitchToRegister === 'function') {
      onSwitchToRegister();
    } else {
      console.error("❌ onSwitchToRegister is not a function");
      // Fallback: Try to close dialog at least
      if (onOpenChange) {
        onOpenChange(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-[#D4B896]">
        <DialogHeader>
          <DialogTitle className="text-[#8B6F47]">เข้าสู่ระบบ</DialogTitle>
          <DialogDescription className="text-[#A68A64]">
            กรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#8B6F47]">
              อีเมล
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#8B6F47]">
              รหัสผ่าน
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-[#A68A64] hover:text-[#8B6F47]">
              ลืมรหัสผ่าน?
            </a>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#8B6F47] hover:bg-[#6F5638] text-white"
          >
            เข้าสู่ระบบ
          </Button>
          <div className="text-center text-sm text-[#A68A64]">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              onClick={handleSwitchToRegister}
              className="text-[#8B6F47] hover:underline font-medium"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}