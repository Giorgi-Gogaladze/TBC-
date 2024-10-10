import React from 'react';
import './Card.css'
import Link from 'next/link';
async function fetchCards(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      console.log('post not found');
      return null;
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.log(error);
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
    console.error(error);
  }

  return (
    <div className='main-width card-wrapper'>
      <div className='card-inside-wrapper'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className='tags'>
        <p>Tags:</p>
        {post.tags.map(tag => {
            return <span key={tag} className='tag'>#{tag}</span>;
          })}
        </div>
        <div className='flex'>
          <p><span className='golden'>Views:</span> {post.views}</p>
          <p><span className='golden'>Likes:</span> {post.reactions.likes}</p>
          <p><span className='golden'>Dislikes:</span> {post.reactions.dislikes}</p>
          <Link href={'/blog'}><button className='back-to-cards'>Back to the cards</button></Link>
        </div>
      </div>
    </div>
  );
}
