import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import Authentication from './Authentication/Authentication';

const Header = () => {
  return (
    <header className='main-width header'>
      <div className="logo">
        <div className='image'>
          <img src="/assets/logo/logo3.png" alt="logo" />
          <h2>UNI-WEB</h2>
        </div>
      </div>
      <Navbar />
      <Authentication />
    </header>
  );
}

export default Header;
