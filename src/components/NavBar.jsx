import React from 'react'
import { Link } from 'react-router-dom';
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
          <img src={Box} alt="aboutus" className="atag2" loading="lazy" />

          <div className="navright">
            <Link to="/" className="nav-item">KGames</Link>
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/" className="nav-item">Road Map</Link>
          </div>
          
        </div>
    </nav>
  )
}
