import React from 'react'
import { useState } from 'react'

import './Navbar.css'
import { HiMenu } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'
function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
   <header className='header'>
   <nav className='navbar'>

    <div className="logo">
        <span className='logo-icon'>
          <FaGlobeAmericas/>
        </span>
    <h2>Travelia</h2>
    </div>
   
    <ul className={menuOpen ? "navlinks active" : "navlinks"}>
        <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>

          <li>
            <a href="#destination" onClick={() => setMenuOpen(false)}>Destination</a>
        </li>

        <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)} >About</a>
        </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
    </ul>
<div className="nav-right">
    <button className='btn'>Book Plan</button>
    <div className="menu-icon"
    onClick={() => 
      setMenuOpen(!menuOpen)
    }>
      <HiMenu />
    </div>
    </div>
   </nav>
   </header>
  )
}

export default Navbar