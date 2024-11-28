import React from 'react'
import './AboutUs.css'
import NavBar from './NavBar'
import abt from "../assets/about2.png";

export default function AboutUs() {
  return (
    <div>
        <NavBar />
        <div>
            <img src={abt} alt="aboutus" className="aboutusimg" loading="lazy" />
        </div>
    </div>
  )
}
