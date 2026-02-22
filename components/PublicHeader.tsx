"use client"
import { useAuthStore } from "@/store/authStore"
import Link from "next/link"
import LoginForm from "./LoginForm"
import { usePathname } from "next/navigation"
import { AmpersandIcon, Dumbbell, LayoutDashboard, Trophy, User } from "lucide-react"

function PublicHeader() {
    const user = useAuthStore((s) => s.user)
    const logout = useAuthStore((s) => s.logout)
    const pathname = usePathname()


    const active = (path: string) =>
        pathname === path
            ? "text-black"
            : "text-gray-400"


    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm flex justify-between py-4 px-6 md:px-12 items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-black text-slate-900 hidden md:flex uppercase tracking-tight">RP ADVANCED TRAINING</Link>
            <Link href="/" className="font-bold first-letter:text-red-500 italic">R<span className="font-bold">P</span></Link>

            {/* Menu Option */}
            <div className="md:flex space-x-8 hidden items-center">
                <Link href="/workout-plan" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">WorkOut Plan</Link>
                <Link href="/challenges" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Challenges</Link>
                {
                    user?.role === "user" && (
                        <Link href="/dashboard" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Dashboard</Link>
                    )
                }
                {
                    user?.role === "admin" && (
                        <Link href="/admin" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Admin</Link>
                    )
                }
            </div>
            {/* Profile */}



            <div className="flex space-x-4 items-center  ">

                {
                    user?.role === "user" && (
                        <Link href="/dashboard" className="flex flex-col items-center text-xs text-blue-400">
                            {/* <LayoutDashboard size={22} /> */}
                            User Dashboard
                        </Link>
                    )
                }
                {
                    user?.role === "admin" && (
                        <Link href="/admin" className="flex flex-col items-center text-xs text-blue-400">
                            {/* <AmpersandIcon size={22} /> */}
                            admin Dashboard
                        </Link>
                    )
                }

                {user ? <div className="flex space-x-4 items-center">
                    <h1 className="text-slate-900 hidden sm:block font-medium">Hello, {user.email.split("@")[0].toUpperCase()}</h1>
                    <button onClick={logout} className="text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-red-600/10 cursor-pointer">Logout</button>
                </div> : <div>
                    <Link href="/login" className="border px-2 py-1 rounded-md text-white bg-black cursor-pointer items-center justify-center flex">Login</Link>
                </div>}
            </div>




            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50
    backdrop-blur-md bg-white/80 border-t">

                <div className="flex items-center justify-around h-16 max-w-md mx-auto">

                    {/* Workout */}
                    <Link
                        href="/workout-plan"
                        className={`flex flex-col items-center text-xs ${active("/workout-plan")}`}
                    >
                        <Dumbbell size={22} />
                        Workout
                    </Link>

                    {/* Challenges */}
                    <Link
                        href="/challenges"
                        className={`flex flex-col items-center text-xs ${active("/challenges")}`}
                    >
                        <Trophy size={22} />
                        Challenges
                    </Link>








                    {/* Profile */}
                    {/* {user ? (
                        <button className="flex flex-col items-center text-xs text-gray-700">
                            <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
                                {user.email.split("@")[0][0].toUpperCase()}
                            </div>
                            Profile
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="flex flex-col items-center text-xs text-gray-400"
                        >
                            <User size={22} />
                            Login
                        </Link>
                    )} */}
                </div>
            </nav>

        </header >
    )
}

export default PublicHeader