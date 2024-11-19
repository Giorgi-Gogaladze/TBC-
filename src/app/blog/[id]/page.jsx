import React from "react";
import "./Card.css";

async function fetchCards(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/getPosts/${id}`);
    if (!response.ok) {
      console.error("Post not found:", response.statusText);
      return null;
    }
    const { post } = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function Card({ params }) {
  let post;
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
