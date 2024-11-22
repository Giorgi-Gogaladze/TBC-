import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  locale: string
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  return (
    <nav className="navbar">
      <ul className="flex gap-11">
        <li className="list-none font-sans">
          <Link href="/" className="text-white no-underline capitalize font-medium transition-transform duration-300 hover:scale-110 hover:font-bold">
            Home
          </Link>
        </li>
        <li className="list-none font-sans">
          <Link href={`/${locale}/about-us`} className="text-white no-underline capitalize font-medium transition-transform duration-300 hover:scale-110 hover:font-bold">
            About Us
          </Link>
        </li>
        <li className="list-none font-sans">
          <Link href="/contact" className="text-white no-underline capitalize font-medium transition-transform duration-300 hover:scale-110 hover:font-bold">
            Contact
          </Link>
        </li>
        <li className="list-none font-sans">
          <Link href="/blog" className="text-white no-underline capitalize font-medium transition-transform duration-300 hover:scale-110 hover:font-bold">
            Blog
          </Link>
        </li>
        <li className="list-none font-sans">
          <Link href="/products" className="text-white no-underline capitalize font-medium transition-transform duration-300 hover:scale-110 hover:font-bold">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
