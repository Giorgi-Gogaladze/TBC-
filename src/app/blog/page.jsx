import "./Blog.css";
import { fetchBlogs } from "../../Utilities/fetchBlogs";

export default async function Blog() {
  const posts = await fetchBlogs();
  return (
    <section className="main-width blog">
      <div>
        <h1 style={{ color: "white" }}>Add Posts:</h1>
      </div>
      <div className="title">
        <div className="first">New Blogging</div>
        <div className="second">System</div>
      </div>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
}
