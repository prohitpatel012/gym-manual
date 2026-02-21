"use client"

import { useAuthStore } from "@/store/authStore"

function LandingPage() {
    const user = useAuthStore((state) => state.user)

    return (
        <div className="relative h-[calc(100vh-72px)] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Fitness Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 bg-linear-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                <p className="mb-6 text-indigo-400 font-medium tracking-wide flex items-center gap-2">
                    <span className="w-8 h-px bg-indigo-400"></span>
                    Hello {user ? user.email.split("@")[0].toUpperCase() : "Champion"}
                    <span className="w-8 h-px bg-indigo-400"></span>
                </p>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
                    Push Your <span className="text-indigo-500">Limits</span> <br />
                    Beyond the Possible
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                    Join the elite community of RP Advanced Training. Access world-class workout plans,
                    track your progress, and crush your fitness goals with intelligent data-driven insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/25">
                        Start Your Journey
                    </button>
                    <button className="px-10 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                        View Challenges
                    </button>
                </div>

                {/* Bottom Stats or Micro-text */}
                <div className="absolute bottom-12 flex gap-8 text-gray-400 text-sm font-medium uppercase tracking-widest">
                    <div>120+ Workouts</div>
                    <div className="w-px h-4 bg-gray-700 mt-0.5"></div>
                    <div>50k+ Athletes</div>
                    <div className="w-px h-4 bg-gray-700 mt-0.5"></div>
                    <div>Expert Coaching</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
