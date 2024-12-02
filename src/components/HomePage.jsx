import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer2";
import gamesData from "./gamesData";

const HomePage = () => {
  return (
    <>
      <div className="main0">
        <NavBar />
        <div className="main1">
          <div className="main2">
            {gamesData.map((game, index) => (
              <a
                key={index}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="main3 group">
                  <img
                    src={game.image}
                    alt={game.name}
                    loading="lazy"
                    className="imageclass"
                  />
                  <div className="main4"></div>
                  <span className="spanclass">
                    <img src={game.icon} alt="Play Icon" loading="lazy" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
