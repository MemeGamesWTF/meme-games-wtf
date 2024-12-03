import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer2";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";
// import gamesData from "./gamesData";

const HomePage = () => {
  const navigation = useNavigation();

  if (navigation.state !== "idle") return <Loader />;

  const gamesData = useLoaderData();
  return (
    <>
      <div className="main0">
        <NavBar />
        <div className="main1">
          <div className="main2">
            {gamesData.length > 0 &&
              gamesData.map((game, index) => (
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

export const gamesLoader = async () => {
  const response = await fetch(
    "https://gamesdata.movindusenuraaluthge.workers.dev/"
  );
  if (!response.ok) {
    // throw new Error("Network response was not ok");
    return [];
  }
  const data = await response.json();
  return data;
};
