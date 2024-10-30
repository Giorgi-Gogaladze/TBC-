'use client'
import React, { useState } from 'react'

function AddingBlogs({handleCreateBlogs}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {
            id: Date.now(),
            
            title,
            body
        }

         handleCreateBlogs(newBlog)
         setBody('')
         setTitle('')
    }

  return (

    <div>
        <form onSubmit={handleSubmit} >
            <input type='text' value={title} placeholder='title' onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" value={body} placeholder='body'  onChange={(e)=> setBody(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddingBlogs