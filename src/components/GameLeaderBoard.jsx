import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./GameLeaderBoard.css";
import gold from "/assets/gold.svg";
import silver from "/assets/silver.svg";
import bronze from "/assets/bronze.svg";
import { supabase } from "../supabaseClient";
import Footer from "./Footer2";
import fire from "/assets/fire.svg";
import heart from "/assets/heart.svg";
import laugh from "/assets/laugh.svg";
import gameconsoler from "/assets/console.svg";

const getK = (val) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(val || 0);

const Item = ({ rank, name, score }) => {
  let bodyClass = "lbbody5";
  let rankClass = "lbnumber";
  switch (rank) {
    case 1:
      bodyClass = "lbbody2";
      rankClass = "lbnumber";
      break;
    case 2:
      bodyClass = "lbbody3";
      rankClass = "lbnumber";
      break;
    case 3:
      bodyClass = "lbbody4";
      rankClass = "lbnumber";
      break;
    default:
      bodyClass = "lbbody5";
      rankClass = "lbnumber";
      break;
  }

  return (
    <div className="lbbody">
      <div className={bodyClass}>
        {rank > 3 ? (
          <h1 className={rankClass}>{rank}</h1>
        ) : (
          <img
            src={rank === 1 ? gold : rank === 2 ? silver : bronze}
            alt="Medal"
            className="lbbody2img"
          />
        )}
        <h1 className="lbtext">{name}</h1>
        <h1 className="lbscore">{score}</h1>
      </div>
    </div>
  );
};

export default function Leaderboard() {
  const { leaderboard, gameName, gameImage, gameDescription, gameData } =
    useLoaderData();
  const [gamesData, setGamesData] = useState(gameData);
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="lbmain">
        <div className="lb-banner">
          <img src={gameImage} alt="Banner" className="lb-banner-img" />
          <div className="lb-buttons">
            <Link to={`/game/${gameName}`} className="lb-btn play-btn">
              PLAY
            </Link>
          </div>
        </div>
        <div className="lb-info">
          <div className="lb-titleNemoji">
            <h2 className="lb-title">{gameName}</h2>
            <img src={fire} alt="fire" className="glbemojis" />
          </div>
          <p className="lb-description">{gameDescription}</p>
          {/* <p className="lb-description">
            We were inspired to create a game based on the Los Angeles fires
            after seeing how unpredictable and intense these wildfires can be.
            The idea was to turn this real-world event into an engaging yet
            thought-provoking meme game, capturing the chaos, urgency, and
            survival instincts needed in such situations. Our goal is to blend
            humor with awareness while keeping the gameplay fun and fast-paced.
          </p> */}
          <div className="lb-statsNshare">
            <div className="lb-stats">
              {/* <span>🔥 10.1k</span>
              <span>😂 10.1k</span> */}
              <span className="reactionsspan">
                <img src={heart} alt="heart" className="reactions" />{" "}
                {gamesData?.heart
                  ? `${getK(gamesData.heart)}`
                  : "No data available"}
              </span>
              <span className="reactionsspan">
                <img src={laugh} alt="laugh" className="reactions" />{" "}
                {gamesData?.laugh
                  ? `${getK(gamesData.laugh)}`
                  : "No data available"}
              </span>
              <span className="reactionsspan">
                <img
                  src={gameconsoler}
                  alt="gameconsoler"
                  className="reactions"
                />{" "}
                {gamesData?.played
                  ? `${getK(gamesData.played)}`
                  : "No data available"}
              </span>
              {/* <p className="card-text">
  {gamesData?.played ? `${getK(gamesData.played)} Times Played` : "No data available"}
</p> */}
            </div>
            <div className="lb-share">
              <a href={`https://twitter.com/intent/tweet?url=https://twitter.com/user/status/1881003825361977387&text=${encodeURIComponent(`Check out ${gameName} on x.com`)}`} target="_blank" rel="noopener noreferrer">
                Share on x.com
              </a>
            </div>
          </div>
        </div>
        <div className="glbbigtopicdiv">
          <h2 className="glbbigtopic">
            Leaderboard
            <span className="horizontal-line"></span>
          </h2>
        </div>

        <div className="glbgamelb">
          {leaderboard.length > 0 &&
            leaderboard.map((item, index) => (
              <Item key={index} {...item} rank={++index} />
            ))}
        </div>
      </div>
      <div className="lbfooter">
        <Footer />
      </div>
    </>
  );
}

export const gameLeaderboardLoader = async ({ params }) => {
  try {
    const { gameId, gameName } = params;

    // Fetch leaderboard data
    const { data: leaderboard, error } = await supabase
      .from("scores")
      .select("name, score, game")
      .eq("game", gameId)
      .or(`name.neq.${null},name.neq.''`)
      .order("score", { ascending: false })
      .limit(10)
      .not("name", "eq", null);

    if (error) {
      console.error("Database error:", error);
      return {
        leaderboard: [],
        gameName,
        gameImage: null,
        gameData: null,
        gameDescription: null,
      };
    }

    // Fetch game data (image, additional info, and description)
    const { data: gameData, error: gameError } = await supabase
      .from("games")
      .select("banner, played, heart, laugh, fire, description")
      .eq("id", gameId)
      .single();

    if (gameError) {
      console.error("Game database error:", gameError);
      return {
        leaderboard: [],
        gameName,
        gameImage: null,
        gameData: null,
        gameDescription: null,
      };
    }

    const uniqueLeaderboard = leaderboard?.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.name === item.name)
    );

    return {
      leaderboard: uniqueLeaderboard || [],
      gameName,
      gameImage: gameData?.banner || null,
      gameData,
      gameDescription: gameData?.description || null, // Add gameDescription
    };
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return {
      leaderboard: [],
      gameName: null,
      gameImage: null,
      gameData: null,
      gameDescription: null,
    };
  }
};
