import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import gamelogo1 from "../assets/hammer2.png";
import gamelogo2 from "../assets/tyson2.png";
import gamelogo3 from "../assets/doge.png";
import gamelogo4 from "../assets/elon.png";
// import movingImage from "../assets/thunder.png";

const HomePage = () => {
  // const numberOfImages = 200;
  return (
    <>
      <div className="main0">
      {/* <div className="background-animation">
          <img src={movingImage} alt="Moving Background" className="moving-image" />
        </div> */}
        {/* Background animation */}
        {/* Background animation */}
        {/* <div className="background-animation">
          {Array.from({ length: numberOfImages }).map((_, index) => {
            const randomDuration = 10 + Math.random() * 10; // Random duration between 10s and 20s
            const randomDelay = Math.random() * 5; // Random delay between 0s and 5s
            const randomTop = Math.random() * 100; // Random vertical position
            const randomLeft = Math.random() * 100; // Random horizontal position

            return (
              <img
                key={index}
                src={movingImage}
                alt="Moving Background"
                className="moving-image"
                style={{
                  animationDuration: `${randomDuration}s`,
                  animationDelay: `${randomDelay}s`,
                  top: `${randomTop}vh`,
                  left: `${randomLeft}vw`,
                }}
              />
            );
          })}
        </div> */}
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
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href="https://memegameswtf.github.io/elon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo3}
                  alt="Description of Image"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">PLAY</span>
              </div>
            </a>
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href="https://memegameswtf.github.io/doge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo4}
                  alt="Description of Image"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">PLAY</span>
              </div>
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
            {/* <div className="main3 group">
              <img
                src={gamelogo3}
                alt="Description of Image"
                className="imageclass"
              />
              <div className="main4"></div>
              <span className="spanclass">COMING SOON</span>
            </div> */}
            {/* </a> */}
            {/*<div className="bg-slate-600 text-white p-4 mt-16 w-52 h-52 flex justify-center items-center rounded-2xl">
            Coming Soon
          </div>
          <div className="bg-slate-600 text-white p-4 mt-16 w-52 h-52 flex justify-center items-center rounded-2xl">
            Coming Soon
          </div> */}
          </div>
        </div>
      </div>
      {/* <div className="main5">
        <p className="main6">Any Meme Game Ideas? Submit Here...</p>
      </div> */}
      <Footer />
    </>
  );
};

export default HomePage;
