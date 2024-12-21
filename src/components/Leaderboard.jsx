import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";
import "./Leaderboard.css";
import gold from "/assets/gold.svg";
import silver from "/assets/silver.svg";
import bronze from "/assets/bronze.svg";
import up from "/assets/up.svg";

export default function Leaderboard() {
  const navigate = useNavigate();
  const { screen_name, profile_image_url_https } = useLoaderData();
  return (
    <div className="lbmain">
      <NavBar2
        screen_name={screen_name}
        profile_image_url_https={profile_image_url_https}
      />
      <div className="lb0">
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
      </div>
    </div>
  );
}
