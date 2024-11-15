
'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Theme-selector.css'

const ThemeSelector = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    const chooseTheme = (selectedTheme) => {
        if(selectedTheme === 'light') {
            document.body.style.backgroundColor = '#ececec';
            document.body.style.color = '#000';
        }
        else if (selectedTheme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        }
    }

    useEffect (() => {
        chooseTheme(theme);
        localStorage.setItem('theme', theme)
    }, [theme])

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