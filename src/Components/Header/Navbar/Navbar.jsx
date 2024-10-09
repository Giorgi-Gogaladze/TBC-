import React from 'react';
import './Navbar.css';
import Link from 'next/link'; // Import Link from next/link

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/AboutUs">About Us</Link></li>
        <li><Link href="/Services">Services</Link></li>
        <li><Link href="/Profile">Profile</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/Blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
