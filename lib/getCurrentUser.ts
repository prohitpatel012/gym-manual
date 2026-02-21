import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export async function getCurrentUser() {
  try {
    const cookiesStore = await cookies();

    const token = cookiesStore.get("Learning_Purpose")?.value;

    if (!token) return null;

    return verifyToken(token);
  } catch (error) {
    return null;
  }
}
