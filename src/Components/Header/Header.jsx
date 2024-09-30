import React from 'react'
import './Header.css'
import logo from '../../assets/logo/logo3.png'

const Header = () => {
  return (
    <header className='main-width header'>
        <div className="logo">
            <div className='image'>
                <img src={logo} alt="logo" />
                <h2>UNI-WEB</h2>
            </div>
        </div>
        <nav></nav>
        <div></div>
    </header>
  )
}

export default Header