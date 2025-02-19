import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"; // Styles for the navbar and sliding menu
import Logo from "/assets/logo5.webp";
import Ham from "/assets/ham3.webp";
import Xlogo from "/assets/twitter3.svg";
// import Xlogomob from "/assets/twitter4.svg";
import { logoutAction } from "./HomePage";
import TransactionList from "./TransactionList";

const X_LOGIN_ENABLED = import.meta.env.VITE_X_LOGIN_ENABLED
  ? import.meta.env.VITE_X_LOGIN_ENABLED
  : "false";

export default function NavBar2({ screen_name, profile_image_url_https }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="TL">
        <TransactionList />
      </div>
      <div className="bgnav">
        <nav className="nav1">
          <div className="navclz1">
            <Link
              to="/"
              className="atag1 scale-effect"
              style={{ backgroundImage: `url(${Logo})` }}
            ></Link>
            <div className="atag2">
              <ul className="navright">
                <li>
                  <NavLink to="/" className="nav-item">
                    Games
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-item">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/howtobuy" className="nav-item">
                    How To Buy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/roadmap2" className="nav-item">
                    Roadmap
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leaderboard" className="nav-item">
                    Leaderboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/comic" className="nav-item">
                    Comic
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="atag2345">
              <div className="navright">
                <NavLink
                  className={`nav-item2345 ${screen_name ? "disabled" : ""}`}
                  activeClassName="active"
                  exact
                  onClick={(e) => {
                    if (X_LOGIN_ENABLED === "false") {
                      e.preventDefault(); // Prevent navigation if disabled
                    } else {
                      if (screen_name) {
                        e.preventDefault(); // Prevent navigation if logged in
                      } else {
                        e.preventDefault();
                        window.location.href = `https://x-login.movindusenuraaluthge.workers.dev?envr=${
                          import.meta.env.PROD ? "PROD" : "DEV"
                        }`;
                      }
                    }
                  }}
                >
                  {screen_name?.length > 7
                    ? `${screen_name.slice(0, 7)}...`
                    : screen_name || "Login With"}

                  <img
                    src={
                      profile_image_url_https ? profile_image_url_https : Xlogo
                    }
                    className={
                      profile_image_url_https ? "profile-circle" : "xlogo"
                    }
                    alt="xlogo"
                    loading="lazy"
                  />
                </NavLink>
              </div>
            </div>

            {screen_name ? (
              <div className="logoutdiv">
                <div className="navright">
                  <NavLink
                    className="nav-item23455432"
                    activeClassName="active"
                    exact
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default navigation
                      logoutAction();
                    }}
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
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
          <NavLink to="/leaderboard">
            <li onClick={closeMenu}>🏆 Leaderboard</li>
          </NavLink>
          <NavLink to="/comic">
            <li onClick={closeMenu}>📖 Comic</li>
          </NavLink>
          <div className="moblogbtn">
            <NavLink
              className={`nav-item234567 ${screen_name ? "disabled" : ""}`}
              activeClassName="active"
              exact
              onClick={(e) => {
                if (X_LOGIN_ENABLED === "false") {
                  e.preventDefault(); // Prevent navigation if disabled
                } else {
                  if (screen_name) {
                    e.preventDefault(); // Prevent navigation if already logged in
                  } else {
                    e.preventDefault();
                    window.location.href = `https://x-login.movindusenuraaluthge.workers.dev?envr=${
                      import.meta.env.PROD ? "PROD" : "DEV"
                    }`;
                  }
                }
              }}
            >
              {screen_name?.length > 7
                ? `${screen_name.slice(0, 7)}...`
                : screen_name || "Login With"}
              <img
                src={profile_image_url_https ? profile_image_url_https : Xlogo}
                className={profile_image_url_https ? "profile-circle" : "xlogo"}
                alt="xlogo"
                loading="lazy"
              />
            </NavLink>
          </div>
          {screen_name ? (
            <div className="logoutdiv2">
              <div className="navright">
                <NavLink
                  className="nav-item23455432"
                  activeClassName="active"
                  exact
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    logoutAction();
                  }}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          ) : null}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
