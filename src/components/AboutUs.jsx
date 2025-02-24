import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "./Footer2";

export default function AboutUs() {
  const [isTelegramEnv, setIsTelegramEnv] = useState(false);

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

  return (
    <>
      <div className="aboutmain">
        <div className="au0">
          <h2 className="aubigtopic">About Us</h2>
        </div>
        <div className="abt4">
          <h1 className="abt6">About Us!</h1>
          <div className="abt5">
            <p className="abt7">
              Welcome to our world! 🎮✨ We're not just a game dev studio—we're
              a wild mix of Millennials and Gen Z hardcore gamers who've been
              leveling up in the industry for the past six years. Stuck in the
              box for too long, we decided it's time to break free and do
              something epic.
            </p>
            <p className="abt7">
              Fueled by an “itch-you-can't-scratch” kind of idea (and a sprinkle
              of Elon Musk inspiration), we asked ourselves: What if we turned
              trending memes into bite-sized, insanely fun Web 3 games? Minimal
              mechanics, maximum fun—that's our vibe!
            </p>
            <p className="abt7">
              Our mission? To create quick bursts of joy, make people smile
              (even if just for a few seconds), and grow alongside the
              community.
            </p>
            <p className="abt7">
              But wait, there's more! We're not just about the games—we're
              building an entire ecosystem. As gamers and developers ourselves,
              we take this opportunity seriously (like, super seriously). Let's
              change the game together! 🚀
            </p>
            <p className="abt7">
              And hey, if you're dreaming of a wild meme game, we've got you! We
              even take payments in $WTF—because why not keep it iconic?
            </p>
          </div>
        </div>
      </div>

      {isTelegramEnv ? (
        <div className="abtfootertele">
          <Footer />
        </div>
      ) : (
        !isTelegramEnv && (
          <div className="abtfooter">
            <Footer />
          </div>
        )
      )}
    </>
  );
}
