import { pool } from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT 1"); // Simple query to check if the database connection is working
    if (result) {
      return new Response(
        JSON.stringify({ message: "Database connection is healthy" }),
        { status: 200 },
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Database connection is not healthy" }),
        { status: 500 },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error connecting to database", error }),
      { status: 500 },
    );
  }
}
