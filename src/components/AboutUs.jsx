import React from 'react'
import './AboutUs.css'
import NavBar from './NavBar'
import arrow from "/assets/arrow.webp";

export default function AboutUs() {
  return (
    <div>
        <NavBar />
        <div className='backbutton'>
        <button 
  onClick={() => window.history.back()} 
  style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
>
  <img src={arrow} alt="arrow" className="backarrow" loading="lazy" />
</button>
        </div>
        <div className="aboutus-container"></div>
    </div>
  )
}
