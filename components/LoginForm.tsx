"use client";

import { useAuthStore } from "@/store/authStore";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const user = useAuthStore((s) => s.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    if (user) {
      redirect("/")
    }
  }, [user, router])


  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser({
        email,
        role: data.user.role,
      });

      router.push("/");
    } else {
      setError(data.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white  rounded-xl shadow w-96 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center py-8">
        Hey, Welcome back! Login to your account
      </h2>


      <div>
        {error && <p className="text-red-500">{error}</p>}
      </div>


      <Link href="/" className="flex space-x-2 py-3 text-gray-600 text-xs">
        <ArrowLeft className="size-3" />
        <p>Back to HomePage</p>
      </Link>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="text-sm font-bold">Email</label>
          <input
            className="border p-2 w-full mb-4 rounded-sm"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-bold">Password</label>
          <input
            type="password"
            className="border p-2 w-full mb-4 rounded-sm"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>



        <button

          className=" w-full text-gray-50 bg-black py-4 rounded-sm"
        >
          {
            loading ? "Logging in..." : "Login"
          }
        </button>

      </form>





    </div>
  );
}

export default LoginForm;
