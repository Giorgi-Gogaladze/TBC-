'use client'
import React, { useEffect, useState } from 'react'
import './Blog.css'
import Loading from '../../Components/loading/Loading'
import Link from 'next/link';

function Blog() {
const [posts,setPosts] = useState([]); 
const [isLoading,setisLoading] =useState(false)

async function fetchData() {
    setisLoading(true)
    try {const response = await fetch('https://dummyjson.com/posts');
        if(!response.ok) {
            console.log('there is a problem fetching data')
        }
        const data = await response.json();
        setPosts(data.posts);
    } catch (error) {
        console.log(error);
    } finally {
        setisLoading(false);
    }
}
    useEffect(() => {
        fetchData()
    },[] )
    
    if(isLoading) return <Loading />
  return (
    <section className='main-width blog'>
        <div className='title'>
            <div className='first'>New Blogging</div>
            <div className='second'>System</div>
        </div>
        {posts.map((post) => {
            return (
                <div className='card' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                        <Link href={`/blog/${post.id}`}>
                        <button>See More</button>
                        </Link>
                    <div className='additional'>
                        <p><span className='views'>views: </span>{post.views}</p>
                        <p><span className='views'>Likes: </span> {post.reactions.likes}</p>
                        <p><span className='views'>Dislikes: </span> {post.reactions.dislikes}</p>
                    </div>
                    
                </div>
            )
        })}
    </section>
  )
}

export default Blog