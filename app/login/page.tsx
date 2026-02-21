import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen ">
      {/* Background Image with Blur & Dark Overlay */}


      {/* Login Form Container */}
      <div className="">
        <LoginForm />
      </div>

      {/* Bottom Legal/Utility Links */}
      <div className="text-center absolute bottom-0 left-0 right-0 z-10">
        <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
          &copy; 2026 RP Advanced Training. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}