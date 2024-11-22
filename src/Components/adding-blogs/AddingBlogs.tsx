'use client'
import React, { useEffect, useState } from 'react'
import { Blog, AddingBlogsProps } from './interfaces/blog'

const AddingBlogs: React.FC<AddingBlogsProps> = ({
  handleCreateBlogs,
  handleEdit,
  editedBlogs
}) => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  useEffect(() => { 
    if (editedBlogs) {
      setTitle(editedBlogs.title)
      setBody(editedBlogs.body)
    }
  }, [editedBlogs])

  const resetForm = () => {
    setTitle('')
    setBody('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog: Blog = {
      id: editedBlogs ? editedBlogs.id : Date.now(),
      title,
      body
    }


    if (editedBlogs) {
      handleEdit(newBlog)
    } else {
      handleCreateBlogs(newBlog)
    }
    resetForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type='text' value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={body} placeholder='body' onChange={(e) => setBody(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddingBlogs