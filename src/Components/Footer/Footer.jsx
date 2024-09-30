import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className=' main-width footer'>
        <section className='footer-elements'>
            <div className='icons'>
                <div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="icon"><i class="fa-brands fa-pinterest-p"></i></div>
                <div className="icon"><i class="fa-brands fa-instagram"></i></div>
                <div className="icon"><i class="fa-brands fa-twitter"></i></div>
            </div>
            <div className='nav'>
                <ul>
                    <li><a href="">HOME</a></li>
                    <span class="divider">|</span>
                    <li><a href="">ABOUT US</a></li>
                    <span class="divider">|</span>
                    <li><a href="">SERVICES</a></li>
                    <span class="divider">|</span>
                    <li><a href="">CONTACT</a></li>
                    <span class="divider">|</span>
                    <li><a href="">BLOG</a></li>
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