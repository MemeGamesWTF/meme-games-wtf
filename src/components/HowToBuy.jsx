import React, { useState, useEffect } from "react";
import "./HowToBuy.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer2";

export default function HowToBuy() {
  const [isTelegramEnv, setIsTelegramEnv] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState("");

  // Detect if the app is running in a Telegram environment
  useEffect(() => {
    const isTelegram = () => {
      try {
        return (
          window.Telegram &&
          window.Telegram.WebApp &&
          window.Telegram.WebApp.initData
        );
      } catch (e) {
        console.error("Error checking Telegram environment:", e);
        return false;
      }
    };

    if (isTelegram()) {
      console.log("Running in Telegram environment");
      setIsTelegramEnv(true);

      // Extract Telegram username from initData
      const initData = new URLSearchParams(window.Telegram.WebApp.initData);
      const user = JSON.parse(initData.get("user"));
      console.log("initData:", initData);
      console.log("User:", user);

      if (user && user.username) {
        setTelegramUsername(user.username);
        console.log("Telegram username:", user.username);
      }
    } else {
      console.log("Not running in Telegram environment");
    }
  }, []);

  return (
    <>
      <div className="howtobuymain">
        <div className="htb0">
          <h2 className="htbbigtopic">How To Buy</h2>
        </div>
        <div className="htb2">
          <div className="htb3 group">
            <div className="htb4">
              <div className="htb4second">
                <div className="htb6div">
                  <h1 className="htb6">Create Wallet</h1>
                </div>
                <div className="htb5">
                  <p className="htb7">
                    Download Phantom or your wallet of choice from the app store
                    or google play for free. Desktop users: Download the google
                    chrome extension by going to Phantom.
                  </p>
                </div>
                <div className="htb8">
                  <button className="htb9">
                    <Link
                      to="https://phantom.app/"
                      className="htb10"
                      as={NavLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Phantom
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="htb4">
              <div className="htb4second">
                <div className="htb6div">
                  <h1 className="htb6">Get Some SOL</h1>
                </div>
                <div className="htb5">
                  <p className="htb7">
                    Have SOL in your wallet to switch to $WTF. If you don't have
                    any SOL, you can buy directly on Phantom, transfer from
                    another wallet, or buy on another exchange and send it to
                    your wallet.
                  </p>
                </div>
                <div className="htb8">
                  <button className="htb9">
                    <Link
                      to="https://phantom.app/"
                      className="htb10"
                      as={NavLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy SOL
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="htb4">
              <div className="htb4second">
                <div className="htb6div">
                  <h1 className="htb6">Go To Jupiter</h1>
                </div>
                <div className="htb5">
                  <p className="htb7">
                    Connect to Jupiter. Connect your wallet in chrome, paste the
                    $WTF token address, select trade, and confirm. When Phantom
                    prompts you for a wallet signature, sign.
                  </p>
                </div>
                <div className="htb8">
                  <button className="htb9">
                    <Link
                      to="https://dexscreener.com/solana/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8"
                      className="htb10"
                      as={NavLink}
                    >
                      Buy Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="htb4">
              <div className="htb4second">
                <div className="htb6div">
                  <h1 className="htb6">Swap For $WTF</h1>
                </div>
                <div className="htb5">
                  <p className="htb7">
                    Switch SOL for $WTF. We have zero taxes so you don't need to
                    worry about buying with a specific slippage. If you don't
                    have any SOL, you can buy directly on Phantom.
                  </p>
                </div>
                <div className="htb8">
                  <button className="htb9">
                    <Link
                      to="https://dexscreener.com/solana/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8"
                      className="htb10"
                      as={NavLink}
                    >
                      Swap Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTelegramEnv ? (
        <div className="htbfootertele">
          <Footer />
        </div>
      ) : (
        !isTelegramEnv && (
          <div className="htbfooter">
            <Footer />
          </div>
        )
      )}
    </>
  );
}
