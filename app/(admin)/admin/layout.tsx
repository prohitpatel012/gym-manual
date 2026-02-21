import AdminHeader from '@/components/AdminHeader'
import { getCurrentUser } from '@/lib/getCurrentUser'
import { redirect } from 'next/navigation'
import React from 'react'

async function AdminLayout({ children }: { children: React.ReactNode }) {
    const user: any = await getCurrentUser();

    // Check if user is logged in and has admin role
    if (!user || user.role !== "admin") {
        redirect("/login")
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <AdminHeader />
            <main className="max-w-7xl mx-auto p-6 md:p-8">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout  