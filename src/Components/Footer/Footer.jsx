import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='main-width footer bg-gradient-to-r from-black via-[#222222] to-black flex items-center justify-center z-50'>
  <section className='footer-elements flex flex-col justify-center items-center gap-6'>
    <div className='icons flex gap-7 mt-8'>
      <div className="icon flex items-center justify-center w-10 h-10 bg-[#1b6e1b] bg-opacity-60 rounded-full border border-[#174d17] cursor-pointer">
        <i className="fa-brands fa-facebook-f text-white text-lg font-medium z-10"></i>
      </div>
      <div className="icon flex items-center justify-center w-10 h-10 bg-[#1b6e1b] bg-opacity-60 rounded-full border border-[#174d17] cursor-pointer">
        <i className="fa-brands fa-pinterest-p text-white text-lg font-medium z-10"></i>
      </div>
      <div className="icon flex items-center justify-center w-10 h-10 bg-[#1b6e1b] bg-opacity-60 rounded-full border border-[#174d17] cursor-pointer">
        <i className="fa-brands fa-instagram text-white text-lg font-medium z-10"></i>
      </div>
      <div className="icon flex items-center justify-center w-10 h-10 bg-[#1b6e1b] bg-opacity-60 rounded-full border border-[#174d17] cursor-pointer">
        <i className="fa-brands fa-twitter text-white text-lg font-medium z-10"></i>
      </div>
    </div>
    <div className='nav'>
      <ul className='flex list-none gap-4'>
        <li><Link href="/" className="text-white text-lg font-semibold transition-transform transform hover:scale-105">HOME</Link></li>
        <span className="divider text-white text-lg font-semibold">|</span>
        <li><Link href="/about-us" className="text-white text-lg font-semibold transition-transform transform hover:scale-105">ABOUT US</Link></li>
        <span className="divider text-white text-lg font-semibold">|</span>
        <li><Link href="/blog" className="text-white text-lg font-semibold transition-transform transform hover:scale-105">BLOG</Link></li>
        <span className="divider text-white text-lg font-semibold">|</span>
        <li><Link href="/contact" className="text-white text-lg font-semibold transition-transform transform hover:scale-105">CONTACT</Link></li>
        <span className="divider text-white text-lg font-semibold">|</span>
        <li><Link href="/products" className="text-white text-lg font-semibold transition-transform transform hover:scale-105">PRODUCTS</Link></li>
      </ul>
    </div>
    <div className='footer-bottom w-full bg-[#1b6e1b] bg-opacity-60 flex justify-center py-3 text-white'>
      <p className="text-sm font-semibold uppercase">© 2024 All rights reserved. Designed by <a href="#" className="underline">idk, me</a></p>
    </div>
  </section>
</footer>

  )
}

export default Footer