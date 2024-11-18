import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import Authentication from './Authentication/Authentication';
import LanguageSelector from '@/Utilities/LanguageSelector';

interface HeaderProps {
  locale: 'en' | 'gr';

}
const Header = ({locale}: HeaderProps) => {
  return (
    <header className='main-width header'>
      <div className="logo">
        <div className='image'>
          <img src="/assets/logo/logo3.png" alt="logo" />
          <h2>UNI-WEB</h2>
        </div>
      </div>
      <Navbar locale={locale}  />
      <LanguageSelector />
      <Authentication />
    </header>
  );
}

export default Header;
