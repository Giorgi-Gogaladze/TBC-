import React from "react";
import "./Card.css";
 
interface BlogPost {
  id: number;
  title: string;
  description: string;
}
 
interface CardProps {
  params: {
    id: string;
  };
}
 
async function fetchCards(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/getPosts/${id}`);
    if (!response.ok) {
      console.error("Post not found:", response.statusText);
      return null;
    }
    const { post } = await response.json();
    return post as BlogPost;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
 
export default async function Card({ params }: CardProps) {
  let post: BlogPost | null = null;
 
  try {
    post = await fetchCards(params.id);
    if (!post) {
      return <div>Post not found.</div>;
    }
  } catch (error) {
    console.error("Error rendering the post:", error);
    return <div>An error occurred while fetching the post.</div>;
  }
 
  return (
    <div className="main-width card-wrapper">
      <div className="card-inside-wrapper">
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </div>
  );
}
 