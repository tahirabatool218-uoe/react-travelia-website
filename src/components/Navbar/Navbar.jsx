import React from 'react'
import { useState,useEffect } from 'react'

import './Navbar.css'
import { HiMenu } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'
function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  const [activeSection,setActiveSection]=useState("home");
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
            <a href="#home" className={activeSection === "home" ? "active": ""} 
            onClick={() => {
              setMenuOpen(false)
              setActiveSection("home");
              }}>Home</a>
        </li>

          <li>
            <a href="#destinations"  className={activeSection === "destinations" ? "active": ""} 
            onClick={() => {
              setMenuOpen(false)
              setActiveSection("destinations");
            }
              }>Destination</a>
        </li>

        <li>
            <a href="#services" className={activeSection === "services" ? "active": ""} 
            onClick={() =>
            {
              setMenuOpen(false)
              setActiveSection("services");
            
            }}>Services</a>
        </li>

          <li>
            <a href="#about" className={activeSection === "about" ? "active": ""} 
            onClick={() =>{
               setMenuOpen(false)
              setActiveSection("about");
              }}
                >About</a>
        </li>

          <li>
            <a href="#contact" className={activeSection === "contact" ? "active": ""} 
            onClick={() => {
            setMenuOpen(false)
            setActiveSection("contact");
            }
            }>Contact</a>
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