import React from 'react'
import './Footer.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className=' main-width footer'>
        <section className='footer-elements'>
            <div className='icons'>
                <div className="icon"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="icon"><i className="fa-brands fa-pinterest-p"></i></div>
                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                <div className="icon"><i className="fa-brands fa-twitter"></i></div>
            </div>
            <div className='nav'>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <span className="divider">|</span>
                <li>
                    <Link href="/about-us">ABOUT US</Link>
                </li>
                <span className="divider">|</span>
                <li>
                    <Link href="/blog">BLOG</Link>
                </li>
                <span className="divider">|</span>
                <li>
                    <Link href="/contact">CONTACT</Link>
                </li>
                <span className="divider">|</span>
                <li>
                    <Link href="/profile">PROFILE</Link>
                </li>
                <span className="divider">|</span>
                <li>
                    <Link href="/products">PRODUCTS</Link>
                </li>
            </ul>

            </div>
            <div className='footer-bottom'>
                <p>�� 2024 All rights reserved. Designed by <a href="#">idk, me</a></p>
            </div>
        </section>
       
    </footer>
  )
}

export default Footer