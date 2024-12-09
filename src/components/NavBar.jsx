import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/logo5.webp"; // Import the logo
import "./NavBar.css";

export default function NavBar() {
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
                to="/roadmap"
                className="nav-item"
                activeClassName="active"
              >
                Road Map
              </NavLink>
              {/* <a className="nav-item" activeClassName="active">
                Road Map
              </a> */}
            </div>
          </div>

          {/* <div className="navright">
            <Link to="/" className="nav-item" as={NavLink}>Games</Link>
            <Link to="/about" className="nav-item" as={NavLink}>About Us</Link>
            <Link to="/" className="nav-item" as={NavLink}>Road Map</Link>
          </div> */}
        </div>
      </nav>

      <div className="nav2">
        <div className="innernav">
          {/* <Link to="/" className="nav-item">Road Map</Link> */}

          {/* <a href='/'
            className="mobatag"
            style={{ backgroundImage: `url(${Logo2})` }}
          >
          </a> */}

          {/* <Link to="/about" className="nav-item">About Us</Link> */}
        </div>
        <div className="moblogodiv">
          <Link to="/">
            <img src={Logo} className="moblogo" loading="lazy" alt="Logo" />
          </Link>
        </div>
        <div className="innernav2">
          <NavLink
            to="/howtobuy"
            className="nav-item2"
            activeClassName="active"
          >
            How To Buy
          </NavLink>
          <NavLink to="/about" className="nav-item2" activeClassName="active">
            About Us
          </NavLink>
        </div>
      </div>
    </>
  );
}
