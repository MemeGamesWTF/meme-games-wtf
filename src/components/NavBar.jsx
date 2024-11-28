import React from 'react'
import Logo from '../assets/logo4.png'; // Import the logo
import Box from '../assets/empbox.png'; // Import the logo
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='nav1'>
        <div className='navclz1'>
          <a href='/'
            className="atag1"
            style={{ backgroundImage: `url(${Logo})` }}
          >
          </a>
          <img src={Box} alt="aboutus" className="atag2" />

          <div className="navright">
  <a href="/" className="nav-item">Games</a>
  <a href="/about" className="nav-item">About Us</a>
  <a href="/" className="nav-item">Road Map</a>
</div>
          
        </div>
    </nav>
  )
}
