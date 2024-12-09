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
    <>
      {/* <h1>{gameName}</h1> */}
      <iframe
        src={url}
        title={gameName}
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </>
  );
}
