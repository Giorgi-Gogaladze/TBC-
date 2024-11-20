export const revalidate = 0;
import { supabase } from "@/lib/connection";

export async function GET(req, { params }) {
  const { id } = params;
  console.log("Received ID:", id);

  try {
    const { data: post, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ post }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
