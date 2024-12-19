
'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Theme-selector.css'

const ThemeSelector = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
      }, []);

      useEffect(() => {
        if (theme === 'light') {
          document.body.style.backgroundColor = '#ececec';
          document.body.style.color = '#000';
        } else if (theme === 'dark') {
          document.body.style.backgroundColor = '#333';
          document.body.style.color = '#fff';
        }
        localStorage.setItem('theme', theme);
      }, [theme]);

    const toggleTheme = () => {
        setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'));
    }
  return (
    <div>
        <label className="label">
            <input
                type="checkbox"
                checked={theme === 'dark'} 
                onChange={toggleTheme}
            />
            <span className="slider"></span>
        </label>
   </div>
  )
}

export default ThemeSelector