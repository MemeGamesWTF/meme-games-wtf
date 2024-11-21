import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import gamelogo1 from "../assets/hammer.png";
import gamelogo2 from "../assets/tyson2.png";
import gamelogo3 from "../assets/doge.png";

const HomePage = () => {
  return (
    <div className="main0">
      <NavBar />
      <div className="main1">
        <div className="main2">
          <a
            href="http://game.taptapamerica.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="main3 group">
              <img
                src={gamelogo1}
                alt="Description of Image"
                className="imageclass"
              />
              <div className="main4"></div>
              <span className="spanclass">PLAY</span>
            </div>
          </a>

          <a
            // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
            href="https://tysonbutt.memegames.wtf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="main3 group">
              <img
                src={gamelogo2}
                alt="Description of Image"
                className="imageclass"
              />
              <div className="main4"></div>
              <span className="spanclass">PLAY</span>
            </div>
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
          <div className="main3 group">
            <img
              src={gamelogo3}
              alt="Description of Image"
              className="imageclass"
            />
            <div className="main4"></div>
            <span className="spanclass">COMING SOON</span>
          </div>
          {/* </a> */}
          {/*<div className="bg-slate-600 text-white p-4 mt-16 w-52 h-52 flex justify-center items-center rounded-2xl">
            Coming Soon
          </div>
          <div className="bg-slate-600 text-white p-4 mt-16 w-52 h-52 flex justify-center items-center rounded-2xl">
            Coming Soon
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
