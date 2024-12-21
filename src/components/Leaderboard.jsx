import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";
import "./Leaderboard.css";
import gold from "/assets/gold.svg";
import silver from "/assets/silver.svg";
import bronze from "/assets/bronze.svg";
import up from "/assets/up.svg";
import { supabase } from "../supabaseClient";
import { STORAGE_KEYS } from "./HomePage";


const Item = ({ rank, screen_name, profile_image_url_https, count }) => {
  console.log({ screen_name, profile_image_url_https, count, rank });
  return (
    <div className="lbbody">
      <div className="lbbody2">
        <img src={rank === 1 ? gold : rank === 2 ? silver : bronze} alt="Medal" className="lbbody2img" />
        {/* <div className="lbavatar" style={{ backgroundImage: `url(${profile_image_url_https})` }}></div> */}
        <h1 className="lbtext">{screen_name}</h1>
        <h1 className="lbscore">{count}</h1>
        {/* <img src={up} alt="Up Icon" className="lbbody2img" /> */}
      </div>
    </div>
  );
};

export default function Leaderboard() {
  const navigate = useNavigate();
  const { screen_name, profile_image_url_https, leaderboard } = useLoaderData();
  console.log({ leaderboard });
  return (
    <div className="lbmain">
      <NavBar2
        screen_name={screen_name}
        profile_image_url_https={profile_image_url_https}
      />
      {/* <div className="lb0">
        <h2 className="lbbigtopic">Leaderboard</h2>
      </div>
      <div className="lbbody">
        <div className="lbbody2">
          <img src={gold} alt="Gold Medal" className="lbbody2img" />
          <div className="lbavatar"></div>
          <h1 className="lbtext">Twitter Name</h1>
          <h1 className="lbscore">100,000</h1>
          <img src={up} alt="Up Icon" className="lbbody2img" />
        </div>
      </div>
      <div className="lbbody">
        <div className="lbbody3">
          <img src={silver} alt="Silver Medal" className="lbbody2img" />
          <div className="lbavatar"></div>
          <h1 className="lbtext">Twitter Name</h1>
          <h1 className="lbscore">100,000</h1>
          <img src={up} alt="Up Icon" className="lbbody2img" />
        </div>
      </div>
      <div className="lbbody">
        <div className="lbbody4">
          <img src={bronze} alt="Bronze Medal" className="lbbody2img" />
          <div className="lbavatar"></div>
          <h1 className="lbtext">Twitter Name</h1>
          <h1 className="lbscore">100,000</h1>
          <img src={up} alt="Up Icon" className="lbbody2img" />
        </div>
      </div>
      <div className="lbbody">
        <div className="lbbody5">
          <h1 className="lbnumber">04</h1>
          <div className="lbavatar"></div>
          <h1 className="lbtext">Twitter Name</h1>
          <h1 className="lbscore">100,000</h1>
          <img src={up} alt="Up Icon" className="lbbody2img" />
        </div>
      </div> */}
      {leaderboard.length > 0 && leaderboard.map((item, index) => (
        <Item key={index} {...item} rank={++index} />
      ))}
    </div>
  );
}

export const userLoaderLeaderboard = async () => {
  const [leaderboard, storageData] = await Promise.all([
    supabase.from("memegames_leaderboard").select("*"),
    Object.fromEntries(
      STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
    ),
  ]);

  return {
    leaderboard: leaderboard?.data,
    ...storageData,
  };
};