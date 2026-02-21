"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

export interface AuthState {
  user: null | {
    email: string;
    role: string;
  };
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
