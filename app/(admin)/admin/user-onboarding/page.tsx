"use client"
import React from "react"

function UserOnboarding() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("user");
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState({ type: "", text: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage({ type: "success", text: "User created successfully!" });
                setName("");
                setEmail("");
                setPassword("");
                setRole("user");
            } else {
                setMessage({ type: "error", text: data.message || "Failed to create user." });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: "error", text: "An unexpected error occurred." });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">

            {/* Container */}
            <div className="
            w-full 
            h-screen
            bg-white
            px-6
            py-8
            flex
            flex-col
            justify-center
            sm:h-auto
            sm:max-w-md
            sm:rounded-3xl
            sm:shadow-2xl
            sm:border
            ">

                {/* Header */}
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Create User
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Add a new user to your system
                    </p>
                </div>

                {message.text && (
                    <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${message.type === "success"
                            ? "bg-green-50 text-green-700 border border-green-100"
                            : "bg-red-50 text-red-700 border border-red-100"
                        }`}>
                        {message.text}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="
                            w-full
                            rounded-xl
                            border border-gray-200
                            bg-gray-50
                            px-4 py-3
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-500/10
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="john@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                            w-full
                            rounded-xl
                            border border-gray-200
                            bg-gray-50
                            px-4 py-3
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-500/10
                            "
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="
                            w-full
                            rounded-xl
                            border border-gray-200
                            bg-gray-50
                            px-4 py-3
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-500/10
                            "
                        />
                    </div>

                    {/* Role */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Role
                        </label>

                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="
                            w-full
                            rounded-xl
                            border border-gray-200
                            bg-gray-50
                            px-4 py-3
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-500/10
                            "
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`
                        w-full
                        mt-2
                        bg-indigo-600
                        hover:bg-indigo-700
                        text-white
                        font-semibold
                        py-3
                        rounded-xl
                        transition
                        shadow-md
                        hover:shadow-lg
                        active:scale-[0.98]
                        ${loading ? "opacity-70 cursor-not-allowed" : ""}
                        `}
                    >
                        {loading ? "Creating..." : "Create User"}
                    </button>

                </form>

                {/* Footer hint */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    Secure user onboarding
                </p>

            </div>
        </div>
    )
}

export default UserOnboarding