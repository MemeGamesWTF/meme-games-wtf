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
import trophy from "/assets/trophy.svg";
import physics from "/assets/physics.png";
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

const getK = (val) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(val || 0);

const LoadingImage = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      to={game.url === null ? "" : `/game/${game.name}`}
      style={{ cursor: "pointer" }}
    >
      <div className="card-header group" style={{ position: "relative" }}>
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
  const { gamesData: initialGamesData } = useLoaderData();
  const [gamesData, setGamesData] = useState(initialGamesData);
  const [selectedType, setSelectedType] = useState(null);
  const [gameEmojiStates, setGameEmojiStates] = useState(
    initialGamesData.reduce((acc, game) => {
      acc[game.name] = {
        fire: false,
        heart: false,
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
          [emoji]: !prevState[gameName][emoji],
        },
      };

      if (emoji === "fire") {
        const newFiredGames = Object.keys(newState)
          .filter((game) => newState[game].fire)
          .slice(0, 4);
        setFiredGames(newFiredGames);
      }

      return newState;
    });
  };

  // Update filtered games to show only the "fired" ones in Trending
  const trendingGames = firedGames.length
    ? gamesData.filter((game) => firedGames.includes(game.name))
    : [];

  // Increment/Decrement heart count and toggle state
  const handleHeartIncrement = (gameId) => {
    const isLiked = gameEmojiStates[gameId]?.heart;

    // Toggle emoji state
    setGameEmojiStates((prevState) => ({
      ...prevState,
      [gameId]: { heart: !isLiked }, // Toggle heart liked state
    }));

    // Update heart count in the database
    supabase
      .rpc("increment_heart", {
        x: isLiked ? -1 : 1, // If already liked, decrement, otherwise increment
        row_id: gameId,
      })
      .then((response) => {
        console.log("Heart count updated:", response);

        // Update local gamesData state
        setGamesData((prevGames) =>
          prevGames.map((game) =>
            game.id === gameId
              ? { ...game, heart: (game.heart || 0) + (isLiked ? -1 : 1) }
              : game
          )
        );
      })
      .catch((error) => {
        console.error("Error incrementing/decrementing heart count:", error);
      });
  };

  return (
    <>
      <div className="gametypesdiv">
        <button
          className={`gamebtns ${
            selectedType === "trending" ? "bg-[#FFF600]" : "bg-white"
          }`}
          onClick={(e) =>
            selectedType !== "trending" && setSelectedType("trending")
          }
          // disabled={false} // Optional if you want to visually disable it (optional)
        >
          <img src={fire} alt="fire" className="gamebtnsimages" />
          <span>Trending</span>
        </button>

        <button
          className={`gamebtns ${
            selectedType === "classic" ? "bg-[#FFF600]" : "bg-white"
          }`}
          onClick={(e) =>
            selectedType !== "classic" && setSelectedType("classic")
          }
          // disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={chad} alt="chad" className="gamebtnsimages" />
          <span>Classic Games</span>
        </button>

        <button
          className={`gamebtns ${
            selectedType === "elon" ? "bg-[#FFF600]" : "bg-white"
          }`}
          onClick={(e) => selectedType !== "elon" && setSelectedType("elon")}
          // disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={rocket} alt="rocket" className="gamebtnsimages" />
          <span>Elon's Games</span>
        </button>

        <button
          className={`gamebtns ${
            selectedType === "brainrot" ? "bg-[#FFF600]" : "bg-white"
          }`}
          onClick={(e) =>
            selectedType !== "brainrot" && setSelectedType("brainrot")
          }
          // disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={brain} alt="brain" className="gamebtnsimages" />
          <span>Brain Rot</span>
        </button>

        <button
          className={`gamebtns ${
            selectedType === "physics" ? "bg-[#FFF600]" : "bg-white"
          }`}
          onClick={(e) =>
            selectedType !== "physics" && setSelectedType("physics")
          }
          // disabled={true} // Optional if you want to visually disable it (optional)
        >
          <img src={physics} alt="brain" className="gamebtnsimages" />
          <span>Physics</span>
        </button>

        {selectedType && (
          <button
            className="gamebtns bg-[#FFDDC1] text-black"
            onClick={() => setSelectedType(null)} // Reset filter
          >
            <span>Back to All Games</span>
          </button>
        )}
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
                      <h2 className="card-title">{`[${game.name}]`}</h2>
                      <p className="card-text">
                        {getK(game.played)} Times Played
                      </p>
                      <div className="dotsnshare">
                        <div className="dots">
                          {/* <button
                          className={`dot ${
                            gameEmojiStates[game.name]?.fire ? "clicked" : ""
                          }`}
                          onClick={() => handleEmojiClick(game.name, "fire")}
                        >
                          <img
                            src={fire} // Replace with your image path
                            alt="Fire"
                            className="emoji-image"
                          />
                        </button> */}
                          <button
                            className={`dot ${
                              gameEmojiStates[game.name]?.heart ? "clicked" : ""
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
                            className={`dot ${
                              gameEmojiStates[game.name]?.thumbsdown
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
                          <Link
                            to={`/game-leaderboard/${game.id}/${game.name}`}
                            className="dot"
                          >
                            <button>
                              <img
                                src={trophy} // Replace with your image path
                                alt="Trophy"
                                className="emoji-image2"
                              />
                            </button>
                          </Link>
                        </div>
                        <div className="sharediv">
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
                                  .then(() =>
                                    console.log("Successfully shared")
                                  )
                                  .catch((error) =>
                                    console.error("Error sharing:", error)
                                  );
                              } else {
                                alert(
                                  "Sharing is not supported on this browser."
                                );
                              }
                            }}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="sharediv">
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
                  </div> */}
                </div>
              ))
            : filteredGames.map((game) => (
                <div className="card00" key={game.name}>
                  <div className="card">
                    <LoadingImage game={game} />

                    <div className="card-body">
                      <h2 className="card-title">{`[${game.name}]`}</h2>
                      <p className="card-text">
                        {getK(game.played)} Times Played
                      </p>
                      <div className="dotsnshare">
                        <div className="dots">
                          {/* <button
                            className={`dot ${
                              gameEmojiStates[game.name]?.fire ? "clicked" : ""
                            }`}
                            onClick={() => handleEmojiClick(game.name, "fire")}
                          >
                            <img
                              src={fire} // Replace with your image path
                              alt="Fire"
                              className="emoji-image"
                            />
                          </button> */}
                          <div className="heart-container">
                            <div key={game.id}>
                              <button
                                className={`dot ${
                                  gameEmojiStates[game.id]?.heart
                                    ? "clicked purple"
                                    : ""
                                }`}
                                onClick={() => handleHeartIncrement(game.id)} // Use game.id
                              >
                                <img
                                  src={heart} // Replace with your image path
                                  alt="Heart"
                                  className="emoji-image"
                                />
                              </button>
                            </div>

                            <p className="card-text2">{getK(game.heart)}</p>
                          </div>
                          <button
                            className={`dot ${
                              gameEmojiStates[game.name]?.thumbsdown
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

                          <Link
                            to={`/game-leaderboard/${game.id}/${game.name}`}
                            className="dot"
                          >
                            <button>
                              <img
                                src={trophy} // Replace with your image path
                                alt="Trophy"
                                className="emoji-image2"
                              />
                            </button>
                          </Link>
                        </div>
                        <div className="sharediv">
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
                                  .then(() =>
                                    console.log("Successfully shared")
                                  )
                                  .catch((error) =>
                                    console.error("Error sharing:", error)
                                  );
                              } else {
                                alert(
                                  "Sharing is not supported on this browser."
                                );
                              }
                            }}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="sharediv -mt-3"> */}
                  {/* <div className="sharediv">
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
                  </div> */}
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
    supabase
      .from("games")
      .select("*")
      .eq("enabled", true)
      .order("created_at", { ascending: false }),

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
