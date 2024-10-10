import React from 'react';
import './Navbar.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
