import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("Learning_Purpose")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Not logged in" },
      { status: 401 }
    );
  }

  const user = verifyToken(token);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: "Protected data",
    user,
  });
}