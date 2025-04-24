import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"; // Styles for the navbar and sliding menu
import Logo from "/assets/logo5.webp";
import Ham from "/assets/ham3.webp";
import Xlogo from "/assets/twitter3.svg";
// import Xlogomob from "/assets/twitter4.svg";
import { logoutAction } from "./HomePage";
import TransactionList from "./TransactionList";
import GamesImg from "/assets/mbgames.svg";
import AbtUsImg from "/assets/community.svg";
import HTBImg from "/assets/mbthink.svg";
import RMImg from "/assets/mbroad.svg";
import LBImg from "/assets/trophy.svg";
import ComicsImg from "/assets/mbbook.svg";
import GregHead from "/assets/greghead.svg";
import LogouIcon from "/assets/logout.svg";
import PhantomWallet from "./PhantomWallet";
import PhantomWallet2 from "./PhantomWallet2";
import PhantomWallet3 from "./PhantomWallet3";
import PhantomWalletNew from "./PhantomWalletNew";
import "./Authentication.css";
// import Authentication from "./Authentication";

const X_LOGIN_ENABLED = import.meta.env.VITE_X_LOGIN_ENABLED
  ? import.meta.env.VITE_X_LOGIN_ENABLED
  : "false";

  // New Authentication Dropdown Component
  const AuthDropdown = ({ 
    screen_name, 
    profile_image_url_https, 
    isTelegramEnv, 
    telegramUsername 
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleXLogin = (e) => {
      e.preventDefault();
      if (X_LOGIN_ENABLED !== "false" && !screen_name) {
        window.location.href = `https://x-login.movindusenuraaluthge.workers.dev?envr=${
          import.meta.env.PROD ? "PROD" : "DEV"
        }`;
      }
    };
    
    const handleLogout = (e) => {
      e.preventDefault();
      logoutAction();
      setIsOpen(false);
    };

    const handleWalletStatusChange = (connected) => {
      setIsWalletConnected(connected);
    };
  
    return (
      <div className="auth-dropdown" ref={dropdownRef}>
        <button 
          className="atag234566" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* {screen_name ? (
            <>
              {screen_name.length > 7 ? `${screen_name.slice(0, 7)}...` : screen_name}
              <img
                src={profile_image_url_https}
                className="profile-circle"
                alt="profile"
                loading="lazy"
              />
            </>
          ) : (
            <>
          <span style={{ fontSize: "25px" }}>Join</span>
        </>
          )} */}
          <span style={{ fontSize: "25px" }}>Join</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
          {/* Login and Logout Side by Side */}
          <div className="side-by-side-container">
            {/* X Login Option */}
            {!isTelegramEnv && (
              <div className={`xlogin dropdown-item ${screen_name ? "logged-in-state" : "logged-out-state"}`} onClick={handleXLogin}>
              {screen_name ? (
                <>
                  <img
                    src={profile_image_url_https || Xlogo}
                    className="profile-circle"
                    alt="Profile"
                    loading="lazy"
                  />
                  <span>{screen_name}</span>
                </>
              ) : (
                <>                
                  <span>Login with</span>
                  <img
                    src={Xlogo}
                    className="xlogo"
                    alt="X logo"
                    loading="lazy"
                  />
                </>
              )}
            </div>
            )}

            {/* Logout Option - Only show if logged in */}
            {screen_name && !isTelegramEnv && (
              <div className="dropdown-item logout-item" onClick={handleLogout}>
                <span><img
                    src={LogouIcon}
                    className="logoutimg"
                    alt="logout image"
                    loading="lazy"
                  /></span>
              </div>
            )}
          </div>
            
            {/* Phantom Wallet Option - Just a container, the actual component is rendered inside */}
            {/* <div className="dropdown-item wallet-item"> */}
              <div className={`dropdown-item ${isWalletConnected ? "wallet-disconnect" : "wallet-connect"}`}>
                          <PhantomWalletNew onWalletStatusChange={handleWalletStatusChange} />
                        </div>
            {/* </div> */}
            
            {/* Logout Option - Only show if logged in */}
            {/* {screen_name && !isTelegramEnv && (
              <div className="dropdown-item logout-item" onClick={handleLogout}>
                <span>Logout</span>
              </div>
            )} */}
          </div>
        )}
      </div>
    );
  };

export default function NavBar2({ screen_name, profile_image_url_https }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTelegramEnv, setIsTelegramEnv] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState("");

  // Detect if the app is running in a Telegram environment
  useEffect(() => {
    // Check if the app is running inside Telegram
    const isTelegram = () => {
      try {
        return (
          window.Telegram &&
          window.Telegram.WebApp &&
          window.Telegram.WebApp.initData
        );
      } catch (e) {
        return false;
      }
    };

    if (isTelegram()) {
      setIsTelegramEnv(true);
      // Extract Telegram username from initData
      const initData = new URLSearchParams(window.Telegram.WebApp.initData);
      const user = JSON.parse(initData.get("user"));
      if (user && user.username) {
        setTelegramUsername(user.username);
      }
    }
  }, []);

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
            {/* <div className="PWdiv">
                <PhantomWallet />
              </div> */}
              <div className="new">
            <div className="atag2">
              <ul className="navright">
                <li>
                  <NavLink to="/" className="nav-item">
                    Games
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/greg" className="nav-item">
                    Greg Universe
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
            {/* <div>
              <Authentication />
            </div> */}
            {/* {screen_name ? (
              <div className="PWdiv">
                <PhantomWallet />
              </div>
            ) : null} */}

{isTelegramEnv ? (
                <div className="atag2345tele">
                  <div className="navrighttele">
                    <div className="nav-item2345tele">
                      {telegramUsername
                        ? telegramUsername.length > 7
                          ? `${telegramUsername.slice(0, 7)}...`
                          : telegramUsername
                        : "Telegram User"}
                    </div>
                  </div>
                </div>
              ) : (
                <AuthDropdown 
                  screen_name={screen_name}
                  profile_image_url_https={profile_image_url_https}
                  isTelegramEnv={isTelegramEnv}
                  telegramUsername={telegramUsername}
                />
              )}

            {/* {screen_name && !isTelegramEnv ? (
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
            ) : null} */}
          </div>
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

        {/* Phantom Wallet */}
        <div>
          <PhantomWallet />
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`sliding-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Header Section with Background Image */}
        <div className="sliding-menu-header"></div>

        {/* Horizontal Line */}
        <div className="sliding-menu-divider"></div>

        {/* Menu Items */}
        <ul>
          <NavLink to="/">
            <li onClick={closeMenu}>
              <img
                src={GamesImg}
                alt="Games Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-2"
              />
              Games
            </li>
          </NavLink>
          <NavLink to="/greg">
            <li onClick={closeMenu}>
              <img
                src={GregHead}
                alt="Greg Head"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              Greg Universe
            </li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={closeMenu}>
              <img
                src={AbtUsImg}
                alt="About Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              About Us
            </li>
          </NavLink>
          <NavLink to="/howtobuy">
            <li onClick={closeMenu}>
              <img
                src={HTBImg}
                alt="How to Buy Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              How to Buy
            </li>
          </NavLink>
          <NavLink to="/roadmap2">
            <li onClick={closeMenu}>
              <img
                src={RMImg}
                alt="Roadmap Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              Roadmap
            </li>
          </NavLink>
          <NavLink to="/leaderboard">
            <li onClick={closeMenu}>
              <img
                src={LBImg}
                alt="Leaderboard Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              Leaderboard
            </li>
          </NavLink>
          <NavLink to="/comic">
            <li onClick={closeMenu}>
              <img
                src={ComicsImg}
                alt="Comic Icon"
                width="30"
                height="30"
                className="inline-block mr-2 mb-1"
              />
              Comic
            </li>
          </NavLink>

          {/* {screen_name ? ( */}
              <div className="mobPWdiv">
                <PhantomWallet3 />
              </div>
            {/* ) : null} */}

          {/* Conditionally render Telegram username or login button in mobile menu */}
          {isTelegramEnv ? (
            <div className="moblogbtntele">
              <div className="nav-item234567tele">
                {telegramUsername || "Telegram User"}
              </div>
            </div>
          ) : (
            !isTelegramEnv && (
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
            )
          )}
          {screen_name && !isTelegramEnv ? (
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
