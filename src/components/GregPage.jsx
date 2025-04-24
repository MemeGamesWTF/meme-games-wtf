import React from "react";
import "./GregPage.css";
import Greg from "/assets/greghead.svg";

export default function GregPage() {
  return (
    <div className="gp1">
      <div className="gp2">
        <img
          src={Greg}
          alt="Greg Head"
          width="180"
          height="180"
          className="gpimg"
        />
        <h1 className="gph1">Coming Soon</h1>
        {/* <h1 className="gph2">
        Watch the official trailer now
        </h1> */}
        <a
          href="https://www.youtube.com/watch?v=F8lHr3ku9zQ"
          target="_blank"
          rel="noopener noreferrer"
          className="gplink"
        >
          Click here to watch the official trailer
        </a>
      </div>
    </div>
  );
}
