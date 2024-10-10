import React from 'react'
import Link from 'next/link'
import './PageNotFound.css'

function PageNotFound() {
  return (
    <div className='page_not_found main-width'>
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
        <Link href="/"><i class="fa-solid fa-house"></i>Go Back to Home</Link>
    </div>
  )
}

export default PageNotFound