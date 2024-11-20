import React from 'react'
import Logo from '../assets/logo.jpg'; // Import the logo
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
        </div>
    </nav>
  )
}
