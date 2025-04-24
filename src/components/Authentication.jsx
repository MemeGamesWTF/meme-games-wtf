import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Xlogo from "/assets/twitter3.svg";
import PhantomWalletNew from "./PhantomWalletNew";
import "./Authentication.css";

const AuthenticationDropdown = ({
  screen_name,
  profile_image_url_https,
  isTelegramEnv,
  telegramUsername,
  // isWalletConnected,
  // connectPhantomWallet,
  X_LOGIN_ENABLED,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  // Determine which text/icon to show in the main dropdown button
  const getAuthButtonContent = () => {
    if (screen_name) {
      return (
        <>
          {screen_name.length > 7
            ? `${screen_name.slice(0, 7)}...`
            : screen_name}
          <img
            src={profile_image_url_https}
            className="profile-circlenew"
            alt="profile"
            loading="lazy"
          />
        </>
      );
    } else if (isTelegramEnv && telegramUsername) {
      return telegramUsername.length > 7
        ? `${telegramUsername.slice(0, 7)}...`
        : telegramUsername;
    } else {
      return (
        <>
          <span style={{ fontSize: "25px" }}>Join</span>
          {/* ▼ */}
        </>
      );
    }
  };

  const handleWalletStatusChange = (connected) => {
    setIsWalletConnected(connected);
  };

  return (
    <div className="auth-dropdown-container" ref={dropdownRef}>
      <button className="atag234566" onClick={() => setIsOpen(!isOpen)}>
        {getAuthButtonContent()}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {/* X Login Option */}
          {!isTelegramEnv && (
            <div
              className={`dropdown-item ${screen_name ? "authenticated" : ""}`}
              onClick={handleXLogin}
            >
              <span>
                {screen_name ? `Signed in as ${screen_name}` : "Login with"}
              </span>
              <img
                src={profile_image_url_https || Xlogo}
                className={
                  profile_image_url_https ? "profile-circlenew" : "xlogonew"
                }
                alt="X logo"
              />
            </div>
          )}

          {/* Phantom Wallet Option */}
          <div className={`dropdown-item ${isWalletConnected ? "wallet-disconnect" : ""}`}>
            <PhantomWalletNew onWalletStatusChange={handleWalletStatusChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationDropdown;
