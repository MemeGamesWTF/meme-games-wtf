import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Leaderboard.css";
import gold from "/assets/gold.svg";
import silver from "/assets/silver.svg";
import bronze from "/assets/bronze.svg";
import { supabase } from "../supabaseClient";
import Footer from "./Footer2";



const Item = ({ rank, screen_name, profile_image_url_https, count }) => {

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
        {rank > 3 ? <h1 className={rankClass}>{rank}</h1> : <img src={rank === 1 ? gold : rank === 2 ? silver : bronze} alt="Medal" className="lbbody2img" />}
        {/* <div className="lbavatar" style={{ backgroundImage: `url(${profile_image_url_https})` }}></div> */}
        <h1 className="lbtext">{screen_name}</h1>
        <h1 className="lbscore">{count}</h1>
        {/* <img src={up} alt="Up Icon" className="lbbody2img" /> */}
      </div>
    </div>
  );
};

export default function Leaderboard() {
  const { leaderboard } = useLoaderData();
  return (
    <>
    <div className="lbmain">
      <div className="lbn0">
          <h2 className="lbnbigtopic">Leaderboard</h2>
        </div>
      {leaderboard.length > 0 && leaderboard.map((item, index) => (
        <Item key={index} {...item} rank={++index} />
      ))}
    </div>
    <div className="lbfooter">
    <Footer />
    </div>
    </>
  );
}

export const userLoaderLeaderboard = async () => {

  const leaderboard = await supabase.from("memegames_leaderboard").select("*");
  return {
    leaderboard: leaderboard?.data,
  };
};