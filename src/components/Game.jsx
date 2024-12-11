import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Game() {
  const gameName = useParams().gameName;
  const gamesData = useLoaderData();
  // find game
  const url = gamesData.find((game) => game.name === gameName).url;
  if (url === undefined) {
    return <div>Game not found</div>;
  }
  return (
    <div style={{backgroundColor: "black"}}>
      {/* <h1>{gameName}</h1> */}
      {/* <iframe
        src={url}
        title={gameName}
        style={{
          width: "56.25vh", 
          height: "100vh", 
          border: "none", 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)"
        }}
      ></iframe> */}
      <iframe
        src={url}
        title={gameName}
        style={{
          width: "100%", 
          height: "100vh", 
          border: "none", 
          // position: "absolute", 
          // top: "50%", 
          // left: "50%", 
          // transform: "translate(-50%, -50%)"
        }}
      ></iframe>
    </div>
  );
}
