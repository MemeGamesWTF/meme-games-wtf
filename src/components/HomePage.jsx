import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
// import Footer from "./Footer";
import Footer from "./Footer2";
import play from "../assets/play2.png";
import tap from "../assets/tap.png";
import gamelogo1 from "../assets/taptapamerica.webp";
import gamelogo2 from "../assets/tysonbutt2.webp";
import gamelogo3 from "../assets/dogegame2.webp";
import gamelogo4 from "../assets/elongame2.webp";
import gamelogo5 from "../assets/martian.webp";
import gamelogo6 from "../assets/comingsoon3.webp";
import gamelogo7 from "../assets/comingsoon4.webp";
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
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={play}/>
                </span>
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
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={play}/>
                </span>
              </div>
            </a>
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href="https://elon.memegames.wtf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo3}
                  alt="Description of Image"
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={play}/>
                </span>
              </div>
            </a>
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href="https://doge.memegames.wtf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo4}
                  alt="Description of Image"
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={play}/>
                </span>
              </div>
            </a>
            <a
              href="https://whackamartian.memegames.wtf/"
              // href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo5}
                  alt="Description of Image"
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={play}/>
                </span>
              </div>
            </a>
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo6}
                  alt="Description of Image"
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={tap}/>
                </span>
              </div>
            </a>
            <a
              // href="https://t.me/meme_games_wtf_bot/tysontaptapbut"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="main3 group">
                <img
                  src={gamelogo7}
                  alt="Description of Image"
                  loading="lazy"
                  className="imageclass"
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img src={tap}/>
                </span>
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
