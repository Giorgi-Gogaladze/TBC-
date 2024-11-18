export async function fetchBlogs() {
  try {
    const res = await fetch("http://localhost:3000/api/getPosts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
