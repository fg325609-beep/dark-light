import React, { useEffect, useState } from 'react'
import './Header.scss'

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div className='header'>
            <h1>Dark/Light Mode</h1>
            <button 
                className='toggle-btn' 
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    )
}

export default Header