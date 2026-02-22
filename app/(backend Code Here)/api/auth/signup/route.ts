import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, password, role } = await request.json();

        if (!name || !email || !password || !role) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);

        if (userCheck.rows.length > 0) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        // Insert new user
        // Note: In a real application, you MUST hash the password before storing it.
        // However, following the existing pattern in login/route.ts which uses plain text.
        const result = await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
            [name, email, password, role]
        );

        const newUser = result.rows[0];

        return NextResponse.json(
            {
                message: "User created successfully",
                user: newUser,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
