import { useState } from "react";
import { loginUser } from "../api/auth";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router";

function LoginForm({ onLoginSuccess, onSwitchToRegister, onOpenChange }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await loginUser(form);

   if (!response.token) {
   alert(response.message || "Login failed");
   return;
  }
  localStorage.setItem("token", response.token);
  onLoginSuccess(response.user);
  // onOpenChange(false);
  navigate("/profile")

  alert("เข้าสู่ระบบสำเร็จ!");
};




  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
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
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#8B6F47]">
              อีเมล
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="border-[#D4B896] focus:border-[#8B6F47] bg-[#FAF8F5]"
              required
            />
          </div>
          {/* <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-[#A68A64] hover:text-[#8B6F47]">
              ลืมรหัสผ่าน?
            </a>
          </div> */}
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
  );
}

export default LoginForm;
