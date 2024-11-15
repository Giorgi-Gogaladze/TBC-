'use client'
import React, { useEffect, useState } from 'react'

function AddingBlogs({handleCreateBlogs, handleEdit, editedBlogs}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
      if(editedBlogs){
        setTitle(editedBlogs.title)
        setBody(editedBlogs.body)
      }
    }, [editedBlogs])


    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {
            id: editedBlogs ? editedBlogs.id : Date.now(),  
            title,
            body
        }

        
        if( editedBlogs){
          handleEdit(newBlog)
        } else {
          handleCreateBlogs(newBlog)
        }
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