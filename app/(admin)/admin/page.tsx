"use client";

import AdminHeader from "@/components/AdminHeader";
import { useAuthStore } from "@/store/authStore";

export default function Admin() {
  const user = useAuthStore((s) => s.user);

  if (user?.role !== "admin") {
    return <div className="p-10">Access Denied</div>;
  }

  return (
    <div>

      Hey {user?.email}





    </div >
  );
}