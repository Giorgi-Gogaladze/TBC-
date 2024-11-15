import { useState, useEffect } from 'react';

const ThemeSelector = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'systemic');

    const chooseTheme = (selectedTheme) => {
        if (selectedTheme === 'light') {
            document.body.style.backgroundColor = '#ececec';
            document.body.style.color = '#000';
        } else if (selectedTheme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        } else if (selectedTheme === 'systemic') {
            document.body.style.backgroundColor = '#87CEEB'; 
            document.body.style.color = '#000';
        }
    };

    useEffect(() => {
        chooseTheme(theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <select value={theme} onChange={(e) => setTheme(e.target.value)} >
            <option > Choose theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="systemic">Systemic</option>
        </select>
    );
};

export default ThemeSelector;
