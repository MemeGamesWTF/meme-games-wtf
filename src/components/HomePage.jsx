import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer2";
import fire from "/assets/fire.svg";
import chad from "/assets/chad.svg";
import rocket from "/assets/rocket.svg";
import brain from "/assets/brain.svg";
import heart from "/assets/heart.svg";
import laugh from "/assets/laugh.svg";
import trophy from "/assets/trophy.svg";
import physics from "/assets/physics.svg";
import community from "/assets/community.svg";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const gamesPerPage = 8;
  const [gameEmojiStates, setGameEmojiStates] = useState(
    initialGamesData.reduce((acc, game) => {
      acc[game.name] = {
        heart: false,
        laugh: false,
      };
      return acc;
    }, {})
  );

  const mostPlayedGames = [...gamesData]
    .sort((a, b) => b.played - a.played) // Sort by played count in descending order
    .slice(0, 4); // Get the top 4 games

  // Filter games based on selected type and search query
  const filteredGames =
    selectedType === "trending"
      ? mostPlayedGames
      : selectedType
      ? gamesData.filter((game) => game.type === selectedType)
      : gamesData;

  // Apply search query to the filtered games
  const searchedGames = filteredGames.filter((game) =>
    game.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = searchedGames.slice(indexOfFirstGame, indexOfLastGame);

  // Reset current page to 1 when search query or selected type changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);

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

  // Increment/Decrement laugh count and toggle state
  const handleLaughIncrement = (gameId) => {
    const isLaughed = gameEmojiStates[gameId]?.laugh;

    // Toggle emoji state
    setGameEmojiStates((prevState) => ({
      ...prevState,
      [gameId]: { ...prevState[gameId], laugh: !isLaughed }, // Toggle laugh state
    }));

    // Update laugh count in the database
    supabase
      .rpc("increment_laugh", {
        x: isLaughed ? -1 : 1, // If already laughed, decrement, otherwise increment
        row_id: gameId,
      })
      .then((response) => {
        console.log("Laugh count updated:", response);

        // Update local gamesData state
        setGamesData((prevGames) =>
          prevGames.map((game) =>
            game.id === gameId
              ? { ...game, laugh: (game.laugh || 0) + (isLaughed ? -1 : 1) }
              : game
          )
        );
      })
      .catch((error) => {
        console.error("Error incrementing/decrementing laugh count:", error);
      });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="gametypesNsearch">
      <div className="gametypesdiv">
  <button
    className={`gamebtns ${
      selectedType === "trending" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "trending") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("trending"); // Select the button
      }
    }}
  >
    <img src={fire} alt="fire" className="gamebtnsimages" />
    <span>Trending</span>
  </button>

  <button
    className={`gamebtns ${
      selectedType === "classic" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "classic") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("classic"); // Select the button
      }
    }}
  >
    <img src={chad} alt="chad" className="gamebtnsimages" />
    <span>Classic Games</span>
  </button>

  <button
    className={`gamebtns ${
      selectedType === "elon" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "elon") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("elon"); // Select the button
      }
    }}
  >
    <img src={rocket} alt="rocket" className="gamebtnsimages" />
    <span>Elon's Games</span>
  </button>

  <button
    className={`gamebtns ${
      selectedType === "brainrot" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "brainrot") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("brainrot"); // Select the button
      }
    }}
  >
    <img src={brain} alt="brain" className="gamebtnsimages" />
    <span>Brain Rot</span>
  </button>

  <button
    className={`gamebtns ${
      selectedType === "physics" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "physics") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("physics"); // Select the button
      }
    }}
  >
    <img src={physics} alt="brain" className="gamebtnsimages" />
    <span>Physics</span>
  </button>

  <button
    className={`gamebtns ${
      selectedType === "community" ? "bg-[#FFF600]" : "bg-white"
    }`}
    onClick={() => {
      if (selectedType === "community") {
        setSelectedType(null); // Deselect and navigate back to "/"
      } else {
        setSelectedType("community"); // Select the button
      }
    }}
  >
    <img src={community} alt="brain" className="gamebtnsimages" />
    <span>Community</span>
  </button>
</div>
        <div className="serchdiv">
          <div className="serchdiv2">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="searchinput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="searchbtn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="homegamesection">
        <h2 className="homegamesectiontopic">Games</h2>
      </div>

      <div className="homegamecontainer">
        <div className="homegamecontainergrid">
          {currentGames.map((game) => (
            <div className="card00" key={game.name}>
              <div className="card">
                <LoadingImage game={game} />
                <div className="card-body">
                  <h2 className="card-title">{`[${game.name}]`}</h2>
                  <p className="card-text">{getK(game.played)} Times Played</p>
                  <div className="dotsnshare">
                    <div className="dots">
                      <div className="heart-container">
                        <div key={game.id}>
                          <button
                            className={`dot ${
                              gameEmojiStates[game.id]?.heart
                                ? "clicked purple"
                                : ""
                            }`}
                            onClick={() => handleHeartIncrement(game.id)}
                          >
                            <img
                              src={heart}
                              alt="Heart"
                              className="emoji-image"
                            />
                          </button>
                        </div>
                        <p className="card-text2">{getK(game.heart)}</p>
                      </div>
                      <div className="laugh-container">
                        <div key={game.id}>
                          <button
                            className={`dot ${
                              gameEmojiStates[game.id]?.laugh
                                ? "clicked purple"
                                : ""
                            }`}
                            onClick={() => handleLaughIncrement(game.id)}
                          >
                            <img
                              src={laugh}
                              alt="Laugh"
                              className="emoji-image"
                            />
                          </button>
                        </div>
                        <p className="card-text2">{getK(game.laugh)}</p>
                      </div>
                      <Link
                        to={`/game-leaderboard/${game.id}/${game.name}`}
                        className="dot"
                      >
                        <button>
                          <img
                            src={trophy}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(searchedGames.length / gamesPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
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