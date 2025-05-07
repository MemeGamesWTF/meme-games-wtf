import React, { useState } from "react";
import "./GregPage.css";
import Footer from "./Footer2";
import Greg from "/assets/greghead.svg";

export default function GregPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <>
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
          {/* <a
          href="https://www.youtube.com/watch?v=F8lHr3ku9zQ"
          target="_blank"
          rel="noopener noreferrer"
          className="gplink"
        >
          Click here to watch the official trailer
        </a> */}
          <div className="video-container">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/F8lHr3ku9zQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
              className={`youtube-iframe ${videoLoaded ? "loaded" : ""}`}
            ></iframe>
          </div>

          {/* <p className="video-caption">
          Official Trailer
        </p> */}
        </div>
      </div>
      <div className="gregfooter">
        <Footer />
      </div>
    </>
  );
}
