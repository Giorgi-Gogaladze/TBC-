'use client';
import React, { useEffect, useState } from 'react';
import './Blog.css';
import Loading from '../../Components/loading/Loading';
import Link from 'next/link';
import { fetchBlogs } from '../../Utilities/fetchBlogs';
import AddingBlogs from '../../Components/adding-blogs/AddingBlogs';

function Blog() {
    const [posts, setPosts] = useState([]);
    const [createdBlogs, setCreatedBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        try {
            const postData = await fetchBlogs();
            setPosts(postData);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleCreateBlogs = (newBlog) => {
        setCreatedBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const unitedBlogs = [...createdBlogs, ...posts];

    if (isLoading) return <Loading />;

    return (
        
        <section className="main-width blog">
            <div>
                <h1 style={{color: 'white'}}>Add Posts:</h1>
                <AddingBlogs handleCreateBlogs={handleCreateBlogs} />
            </div>
            <div className="title">
                <div className="first">New Blogging</div>
                <div className="second">System</div>
            </div>
            {unitedBlogs.map((post) => (
                <div className="card" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`/blog/${post.id}`}>
                        <button>See More</button>
                    </Link>
                    <div className="additional">
                        <p><span className="views">views: </span>{post.views || 'N/A'}</p>
                        <p><span className="views">Likes: </span> {post.reactions?.likes || 'N/A'}</p>
                        <p><span className="views">Dislikes: </span> {post.reactions?.dislikes || 'N/A'}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Blog;
