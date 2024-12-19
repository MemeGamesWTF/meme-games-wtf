import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"; // Styles for the navbar and sliding menu
import Logo from "/assets/logo5.webp";
import Ham from "/assets/ham3.webp";
import Xlogo from "/assets/twitter3.svg";
import Xlogomob from "/assets/twitter4.svg";

export default function NavBar2({ screen_name, profile_image_url_https }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000); // Hide tooltip after 2 seconds
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="nav1">
        <div className="navclz1">
          {/* <a href='/'
                className="atag1"
                style={{ backgroundImage: `url(${Logo})` }}
              >
              </a> */}
          <Link
            to="/"
            className="atag1"
            style={{ backgroundImage: `url(${Logo})` }}
          ></Link>
          {/* <img src={Box} alt="aboutus" className="atag2" loading="lazy" /> */}

          <div className="atag2">
            <div className="navright">
              <NavLink
                to="/"
                className="nav-item"
                activeClassName="active"
                exact
              >
                Games
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item"
                activeClassName="active"
              >
                About Us
              </NavLink>
              <NavLink
                to="/howtobuy"
                className="nav-item"
                activeClassName="active"
              >
                How To Buy
              </NavLink>
              <NavLink
                to="/roadmap2"
                className="nav-item"
                activeClassName="active"
              >
                Roadmap
              </NavLink>
              {/* <a className="nav-item" activeClassName="active">
                    Road Map
                  </a> */}
            </div>
          </div>
          <div className="atag2345">
            <div className="navright">
              <NavLink
                // to="/about"
                className="nav-item2345"
                activeClassName="active"
                exact
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  window.location.href =
                    "https://x-login.movindusenuraaluthge.workers.dev/";
                }}
              >
                {/* Login With{" "} */}
                {screen_name ? screen_name : "Login With "}

                <img src={profile_image_url_https ? profile_image_url_https : Xlogo} className="xlogo" alt="xlogo" loading="lazy" />
              </NavLink>
            </div>
          </div>

          {/* <div className="navright">
                <Link to="/" className="nav-item" as={NavLink}>Games</Link>
                <Link to="/about" className="nav-item" as={NavLink}>About Us</Link>
                <Link to="/" className="nav-item" as={NavLink}>Road Map</Link>
              </div> */}
        </div>
      </nav>
      <div className="navbar-container">
        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <img src={Ham} className="ham" loading="lazy" alt="Menu Icon" />
        </div>

        {/* Logo in the Center */}
        <div className="moblogodiv123">
          <img src={Logo} className="moblogo123" loading="lazy" alt="Logo" />
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`sliding-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Header Section with Background Image */}
        <div className="sliding-menu-header"></div>

        {/* Horizontal Line */}
        <div className="sliding-menu-divider"></div>
        {/* Close Button */}
        {/* <button className="close-button" onClick={closeMenu}>
          &times;
        </button> */}

        {/* Menu Items */}
        <ul>
          <NavLink to="/">
            {" "}
            <li onClick={closeMenu}>🕹 Games</li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={closeMenu}>😎 About Us</li>
          </NavLink>
          <NavLink to="/howtobuy">
            <li onClick={closeMenu}>🤔 How to Buy</li>
          </NavLink>
          <NavLink to="/roadmap2">
            <li onClick={closeMenu}>🛣 Roadmap</li>
          </NavLink>
          <div className="absolute bottom-8 left-16 bg-[#00E5FF] px-4 py-1 rounded-md">
            <NavLink
              // to="/about"
              className="nav-item234567"
              activeClassName="active"
              exact
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation
                window.location.href =
                  "https://x-login.movindusenuraaluthge.workers.dev/";
              }}
            >
              {screen_name ? screen_name : "Login With X"}
              <img src={profile_image_url_https ? profile_image_url_https : Xlogomob} className="xlogomob" alt="xlogo" loading="lazy" />
            </NavLink>
          </div>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
