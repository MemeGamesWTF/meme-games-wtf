import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer2";
// import gamesData from "./gamesData";

const HomePage = () => {

  const [gamesData, setGamesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const response = await fetch('https://gamesdata.movindusenuraaluthge.workers.dev/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGamesData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchGamesData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
