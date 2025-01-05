import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./GameLeaderBoard.css";
import gold from "/assets/gold.svg";
import silver from "/assets/silver.svg";
import bronze from "/assets/bronze.svg";
import { supabase } from "../supabaseClient";
import Footer from "./Footer2";

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
  const { leaderboard, gameName } = useLoaderData();
  return (
    <>
      <div className="lbmain">
        <div className="lb-banner">
          <img
            src="/assets/banner.jpg"
            alt="Banner"
            className="lb-banner-img"
          />
          <div className="lb-buttons">
            <button className="lb-btn game-name">{gameName}</button>
            <Link to={`/game/${gameName}`} className="lb-btn play-btn">Play</Link>
          </div>
        </div>
        <br></br>
        {leaderboard.length > 0 &&
          leaderboard.map((item, index) => (
            <Item key={index} {...item} rank={++index} />
          ))}
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

    const { data: leaderboard, error } = await supabase
      .from('scores')
      .select('name, score, game')
      .eq('game', gameId)
      .or(`name.neq.${null},name.neq.''`)
      .order('score', { ascending: false })
      .limit(10)
      .not('name', 'eq', null);
    console.log({ leaderboard });
    if (error) {
      console.error("Database error:", error);
      return { leaderboard: [], gameName };
    }

    const uniqueLeaderboard = leaderboard?.filter((item, index, self) =>
      index === self.findIndex((t) => t.name === item.name)
    );

    return {
      leaderboard: uniqueLeaderboard || [],
      gameName
    };

  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return { leaderboard: [], gameName: null };
  }
};