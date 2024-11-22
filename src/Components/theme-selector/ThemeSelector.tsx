'use client'
import React, { useState, useEffect } from 'react'
import './Theme-selector.css'

const ThemeSelector: React.FC = () => {
    const [theme, setTheme] = useState<string>('light')

    const chooseTheme = (selectedTheme: string) => {
        if (selectedTheme === 'light') {
            document.body.style.backgroundColor = '#ececec';
            document.body.style.color = '#000';
        } else if (selectedTheme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') || 'light';
            setTheme(storedTheme);
            chooseTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        chooseTheme(theme);
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