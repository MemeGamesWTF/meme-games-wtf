import React from "react";
import "./AboutUs.css";
// import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
// import arrow from "/assets/arrow.svg";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const { screen_name, profile_image_url_https } = useLoaderData();
  return (
    <div className="aboutmain">
      <NavBar2
        screen_name={screen_name}
        profile_image_url_https={profile_image_url_https}
      />
      {/* <div className="backbutton">
        <button
          onClick={() => navigate(-1)}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img src={arrow} alt="arrow" className="backarrow" loading="lazy" />
        </button>
      </div> */}
      {/* <div className="aboutus-container"></div> */}

      <div className="abt4">
        <h1 className="abt6">About Us!</h1>
        <div className="abt5">
          <p className="abt7">
            Welcome to our world! 🎮✨ We're not just a game dev studio—we're a
            wild mix of Millennials and Gen Z hardcore gamers who've been
            leveling up in the industry for the past six years. Stuck in the box
            for too long, we decided i's time to break free and do something
            epic.
          </p>
          <p className="abt7">
            Fueled by an “itch-you-can't-scratch” kind of idea (and a sprinkle
            of Elon Musk inspiration), we asked ourselves: What if we turned
            trending memes into bite-sized, insanely fun Web 3 games? Minimal
            mechanics, maximum fun—that's our vibe!
          </p>
          <p className="abt7">
            Our mission? To create quick bursts of joy, make people smile (even
            if just for a few seconds), and grow alongside the community.
          </p>
          <p className="abt7">
            But wait, there's more! We're not just about the games—we're
            building an entire ecosystem. As gamers and developers ourselves, we
            take this opportunity seriously (like, super seriously). Let's
            change the game together! 🚀
          </p>
          <p className="abt7">
            And hey, if you're dreaming of a wild meme game, we've got you! We
            even take payments in $WTF—because why not keep it iconic?
          </p>
        </div>
      </div>
    </div>
  );
}
