'use client'

import { MenuIcon, X, Users, Settings, Home, LogOut, LayoutDashboard, LogIn } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'

function AdminHeader() {
    const [open, setOpen] = useState(false)
    const logout = useAuthStore((s) => s.logout)
    const user = useAuthStore((s) => s.user)


    if (user?.role !== 'admin') {
        return null
    }


    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
        { name: 'User Onboarding', icon: <Users size={20} />, href: '/admin/user-onboarding' },
        { name: 'Settings', icon: <Settings size={20} />, href: '/admin/settings' },
        { name: 'Back to Site', icon: <Home size={20} />, href: '/' },
    ]

    return (
        <>
            {/* Header Bar */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setOpen(true)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                        <MenuIcon size={24} className="text-slate-600" />
                    </button>
                    <h1 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Admin Console</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-slate-600 hidden md:block">
                        {user?.email}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        {user?.email?.[0].toUpperCase()}
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white">
                                <span className="font-bold underline text-xs">RP</span>
                            </div>
                            <span className="font-black text-slate-800 tracking-tighter">ADMIN</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        >
                            <X size={20} className="text-slate-400" />
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl font-medium transition-all group"
                            >
                                <span className="text-slate-400 group-hover:text-indigo-500 transition-colors">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>




                    <div>
                        {
                            user && user.role == 'admin' ? (
                                <Link href={"/login"}
                                    onClick={logout}
                                    className="flex items-center space-x-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-all group cursor-pointer"
                                >
                                    <LogOut size={20} />
                                    <span>Sign Out</span>
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center space-x-3 w-full px-4 py-3 text-indigo-600 hover:bg-indigo-50 rounded-xl font-medium transition-all group cursor-pointer"
                                >
                                    <LogIn size={20} />
                                    <span>Sign In</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHeader