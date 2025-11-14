
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import LoginForm from "../form/LoginForm";

export function LoginDialog({ open, onOpenChange, onLoginSuccess, onSwitchToRegister }) {
 

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-[#D4B896]">
        <DialogHeader>
          <DialogTitle className="text-[#8B6F47]">เข้าสู่ระบบ</DialogTitle>
          <DialogDescription className="text-[#A68A64]">
            กรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ
          </DialogDescription>
        </DialogHeader>
       <LoginForm 
       onLoginSuccess={onLoginSuccess}
       onOpenChange={onOpenChange}
       onSwitchToRegister={onSwitchToRegister}
       />
      </DialogContent>
    </Dialog>
  );
}