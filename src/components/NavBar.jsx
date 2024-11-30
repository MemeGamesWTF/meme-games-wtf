import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo4.png'; // Import the logo
import Logo2 from '../assets/header2.png';
import Box from '../assets/empbox.png';
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className='nav1'>
        <div className='navclz1'>
          <a href='/'
            className="atag1"
            style={{ backgroundImage: `url(${Logo})` }}
          >
          </a>
          <img src={Box} alt="aboutus" className="atag2" loading="lazy" />

          <div className="navright">
            <Link to="/" className="nav-item" as={NavLink}>Games</Link>
            <Link to="/about" className="nav-item" as={NavLink}>About Us</Link>
            <Link to="/" className="nav-item" as={NavLink}>Road Map</Link>
          </div>

        </div>
      </nav>

      <div className='nav2'>
        <div className="innernav">
          {/* <Link to="/" className="nav-item">Road Map</Link> */}

          <a href='/'
            className="mobatag"
            style={{ backgroundImage: `url(${Logo2})` }}
          >
          </a>

          {/* <Link to="/about" className="nav-item">About Us</Link> */}
        </div>
        <div className='innernav2'>
          <Link to="/" className="nav-item2" as={NavLink}>Road Map</Link>
          <Link to="/about" className="nav-item2" as={NavLink}>About Us</Link>
        </div>
      </div>
    </>
  )
}
