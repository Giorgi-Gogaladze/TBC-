'use client'
import React, { useEffect, useState } from 'react'
import './Blog.css'
import Loading from '../../Components/loading/Loading'

function Blog() {
const {posts,setPosts} = useState([]); 
const [isLoading,setisLoading] =useState(true)

async function fetchData() {
    setisLoading(true)
    try {const response = await fetch('https://dummyjson.com/posts');
        if(!response.ok) {
            console.log('there is a problem fetching data')
        }
        const data = await response.json();
        setPosts(data);
    } catch (error) {
        console.log(error)
        setisLoading(true);
    }
}
    useEffect(() => {
        fetchData()
    },[] )
    
    if(isLoading) return <Loading />


  return (
    <section className='main-width blog'>
    </section>
  )
}

export default Blog