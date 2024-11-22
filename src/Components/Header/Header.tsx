import React from 'react';
import Navbar from './Navbar/Navbar';
import Authentication from './Authentication/Authentication';
import LanguageSelector from '@/Utilities/LanguageSelector';

interface HeaderProps {
  locale: 'en' | 'gr';

}
const Header = ({locale}: HeaderProps) => {
  return (
    <header className='main-width flex items-center justify-between max-h-[200px] w-full bg-gradient-to-r from-black via-gray-600 to-black text-white z-50'>
  <div className="logo">
    <div className='flex items-end gap-2 cursor-pointer'>
      <img src="/assets/logo/logo3.png" alt="logo" className="h-[55px]" />
      <h2 className="text-[19px] font-[400] font-pacifico">UNI-WEB</h2>
    </div>
  </div>
  <Navbar locale={locale} />
  <LanguageSelector />
  <Authentication />
</header>

  );
}

export default Header;
