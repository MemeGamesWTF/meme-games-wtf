import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer2";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";
// import gamesData from "./gamesData";

const HomePage = () => {
  const navigation = useNavigation();

  if (navigation.state !== "idle") {
    <Loader />;
  } else {
    <Outlet />;
  }

  const gamesData = useLoaderData();
  return (
    <>
      <div className="main0">
        <NavBar />
        <div className="main1">
          <div className="main2">
            {typeof gamesData !== undefined &&
              gamesData.length > 0 &&
              gamesData.map((game) => (
                <Link
                  to={`/game/${game.name}`}
                  key={game.name}
                  // key={game.name}
                  // href={game.url}
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  <div className="main3 group">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                      className="imageclass"
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                      }}
                    />
                    <div className="main4"></div>
                    <span className="spanclass">
                      <img
                        src={game.icon}
                        alt="Play Icon"
                        loading="lazy"
                        onLoad={(e) => {
                          e.target.style.opacity = 1;
                        }}
                      />
                    </span>
                  </div>
                </Link>
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
