import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>

    </nav>
  )
}

export default Navbar