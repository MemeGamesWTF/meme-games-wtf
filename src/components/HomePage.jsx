import React, { useState } from "react";
import "./HomePage.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer2";
import fire from "/assets/fire.svg";
import chad from "/assets/chad.svg";
import rocket from "/assets/rocket.svg";
import brain from "/assets/brain.svg";
import heart from "/assets/heart.svg";
import thumbsup from "/assets/thumbsup.svg";
import thumbsdown from "/assets/thumbsdown.svg";
import trophy from "/assets/trophy.png"
import { supabase } from "../supabaseClient";

export const STORAGE_KEYS = [
  "oauth_token",
  "oauth_token_secret",
  "user_id",
  "name",
  "screen_name",
  "profile_banner_url",
  "location",
  "profile_image_url_https",
  "following",
];

const getK = (val) => new Intl.NumberFormat("en", { notation: "compact" }).format(val || 0); 

const LoadingImage = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      to={game.url === null ? "" : `/game/${game.name}`}
      style={{ cursor: "pointer" }}
    >
      <div className="card-header group"
        style={{ position: "relative" }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-600">Loading...</span>
          </div>
        )}
        <img
          src={`${game.url}/thumbnail2.webp`}
          alt={game.name}
          className="gamebtnsimages2 w-full h-full object-cover"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
        <img src={game.icon} alt="icon" className="game-icon" />
      </div>
    </Link>
  );
};

const HomePage = () => {
  const { gamesData } = useLoaderData();
  const [selectedType, setSelectedType] = useState(null);
  const [gameEmojiStates, setGameEmojiStates] = useState(
    gamesData.reduce((acc, game) => {
      acc[game.name] = {
        fire: false,
        heart: false,
        thumbsup: false,
        thumbsdown: false,
      };
      return acc;
    }, {})
  );

  const [firedGames, setFiredGames] = useState([]);

  // Filter games based on selected type
  const filteredGames = selectedType
    ? gamesData.filter((game) => game.type === selectedType)
    : gamesData;

  // Handle emoji button clicks for each game
  const handleEmojiClick = (gameName, emoji) => {
    setGameEmojiStates((prevState) => {
      const newState = {
        ...prevState,
        [gameName]: {
          ...prevState[gameName],
          [emoji]: !prevState[gameName][emoji], // Toggle the emoji's selected state
        },
      };

      if (emoji === "fire") {
        // Track the "fire" button state and update fired games
        const newFiredGames = Object.keys(newState)
          .filter((game) => newState[game].fire)
          .slice(0, 4); // Get the top 4 "fired" games
        setFiredGames(newFiredGames);
      }

      return newState;
    });
  };

  // Update filtered games to show only the "fired" ones in Trending
  const trendingGames = firedGames.length
    ? gamesData.filter((game) => firedGames.includes(game.name))
    : [];


  return (
    <>

      <div className="gametypesdiv">
        <button
          className={`gamebtns ${selectedType === "trending" ? "bg-[#FFF600]" : "bg-white"}`}
          onClick={(e) => selectedType !== "trending" && setSelectedType("trending")}
          disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={fire} alt="fire" className="gamebtnsimages" />
          <span>Trending</span>
        </button>

        <button
          className={`gamebtns ${selectedType === "classic" ? "bg-[#FFF600]" : "bg-white"}`}
          onClick={(e) => selectedType !== "classic" && setSelectedType("classic")}
          disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={chad} alt="chad" className="gamebtnsimages" />
          <span>Classic Games</span>
        </button>

        <button
          className={`gamebtns ${selectedType === "elon" ? "bg-[#FFF600]" : "bg-white"}`}
          onClick={(e) => selectedType !== "elon" && setSelectedType("elon")}
          disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={rocket} alt="rocket" className="gamebtnsimages" />
          <span>Elon's Games</span>
        </button>

        <button
          className={`gamebtns ${selectedType === "brainrot" ? "bg-[#FFF600]" : "bg-white"}`}
          onClick={(e) => selectedType !== "brainrot" && setSelectedType("brainrot")}
          disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={brain} alt="brain" className="gamebtnsimages" />
          <span>Brain Rot</span>
        </button>
      </div>


      <div className="homegamesection">
        <h2 className="homegamesectiontopic">Games</h2>
      </div>

      <div className="homegamecontainer">
        <div className="homegamecontainergrid">
          {selectedType === "trending"
            ? trendingGames.map((game) => (
              <div className="card00" key={game.name}>
                <div className="card">
                  <LoadingImage game={game} />
                  <div className="card-body">
                    <h2 className="card-title">{game.name}</h2>
                    <p className="card-text">{getK(game.played)} Times Played</p>
                    <div className="dots">
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.fire ? "clicked" : ""
                          }`}
                        onClick={() => handleEmojiClick(game.name, "fire")}
                      >
                        <img
                          src={fire} // Replace with your image path
                          alt="Fire"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.heart ? "clicked" : ""
                          }`}
                        onClick={() => handleEmojiClick(game.name, "heart")}
                      >
                        <img
                          src={heart} // Replace with your image path
                          alt="Heart"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.thumbsup
                          ? "clicked"
                          : ""
                          }`}
                        onClick={() =>
                          handleEmojiClick(game.name, "thumbsup")
                        }
                      >
                        <img
                          src={thumbsup} // Replace with your image path
                          alt="Thumbs Up"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.thumbsdown
                          ? "clicked"
                          : ""
                          }`}
                        onClick={() =>
                          handleEmojiClick(game.name, "thumbsdown")
                        }
                      >
                        <img
                          src={thumbsdown} // Replace with your image path
                          alt="Thumbs Down"
                          className="emoji-image"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="sharediv -mt-3">
                  <button
                    className="share-button"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check out this game!",
                            text: `Play ${game.name} now!`,
                            url: window.location.href,
                          })
                          .then(() => console.log("Successfully shared"))
                          .catch((error) =>
                            console.error("Error sharing:", error)
                          );
                      } else {
                        alert("Sharing is not supported on this browser.");
                      }
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            ))
            : filteredGames.map((game) => (
              <div className="card00" key={game.name}>
                <div className="card">
                  <LoadingImage game={game} />

                  <div className="card-body">
                    <h2 className="card-title">{`[${game.name}]`}
                      <Link to={`/game-leaderboard/${game.id}/${game.name}`}>
                        <button className="emoji-image">
                          <img src={trophy} alt="Trophy" />
                        </button>
                      </Link>
                    </h2>
                    <p className="card-text">{getK(game.played)} Times Played</p>
                    <div className="dots">
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.fire ? "clicked" : ""
                          }`}
                        onClick={() => handleEmojiClick(game.name, "fire")}
                      >
                        <img
                          src={fire} // Replace with your image path
                          alt="Fire"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.heart ? "clicked" : ""
                          }`}
                        onClick={() => handleEmojiClick(game.name, "heart")}
                      >
                        <img
                          src={heart} // Replace with your image path
                          alt="Heart"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.thumbsup
                          ? "clicked"
                          : ""
                          }`}
                        onClick={() =>
                          handleEmojiClick(game.name, "thumbsup")
                        }
                      >
                        <img
                          src={thumbsup} // Replace with your image path
                          alt="Thumbs Up"
                          className="emoji-image"
                        />
                      </button>
                      <button
                        className={`dot ${gameEmojiStates[game.name]?.thumbsdown
                          ? "clicked"
                          : ""
                          }`}
                        onClick={() =>
                          handleEmojiClick(game.name, "thumbsdown")
                        }
                      >
                        <img
                          src={thumbsdown} // Replace with your image path
                          alt="Thumbs Down"
                          className="emoji-image"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="sharediv -mt-3">
                  <button
                    className="share-button"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check out this game!",
                            text: `Play ${game.name} now!`,
                            url: window.location.href,
                          })
                          .then(() => console.log("Successfully shared"))
                          .catch((error) =>
                            console.error("Error sharing:", error)
                          );
                      } else {
                        alert("Sharing is not supported on this browser.");
                      }
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

export const gamesLoader = async () => {
  const [games, storageData] = await Promise.all([
    supabase.from("games").select("*").order("created_at", { ascending: false }),

    Object.fromEntries(
      STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
    ),
  ]);

  return {
    gamesData: games?.data,
    ...storageData,
  };
};

export const userLoader = async () => {
  const storageData = await Object.fromEntries(
    STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
  );
  return {
    ...storageData,
  };
};

export const logoutAction = () => {
  STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  window.location.reload();
};
