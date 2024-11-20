'use client'
import "./Blog.css";
import { fetchBlogs } from "../../Utilities/fetchBlogs";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
}

export default  function Blog() {
  const [posts, setPosts] = useState<Blog[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogs();
      setPosts(data);
    };
    fetchData();
  }, [])
  
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
