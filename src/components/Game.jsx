import React, { useEffect } from "react";
import { Navigate, redirect, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { STORAGE_KEYS } from "./HomePage";


export default function Game() {
  const gameName = useParams().gameName;
  const navigate = useNavigate();
  const { gameData } = useLoaderData();

  console.log({ gameData });
  const url = gameData?.url;

  useEffect(() => {
    if (!url) {
      const abortController = new AbortController();

      const timeoutId = setTimeout(() => {
        navigate("/", { signal: abortController.signal });
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
        abortController.abort();
      };
    }
  }, [url, navigate]);

  if (!url) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Game Not Found</h1>
        <p>Redirecting to the homepage...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "black" }}>

      <iframe
        src={url}
        title={gameName}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}

export const gameLoader = async ({ params, request }) => {
  const { gameName } = params;
  if (!gameName) return redirect("/");
  const response = await fetch(`https://gamesdata.movindusenuraaluthge.workers.dev/?name=${encodeURIComponent(gameName)}`);
  if (!response.ok) return redirect("/");
  const [data, storageData] = await Promise.all([
    response.json(),
    Object.fromEntries(
      STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
    ),
  ]);
  if (storageData.user_id) {
    const gamePlayData = {
      user_id: storageData.user_id,
      game_name: gameName,
      screen_name: storageData.screen_name,
    }
    supabase
      .from("memegames")
      .upsert(gamePlayData)
      .then((response) => {
        console.log("Game play data inserted", { response });
      })
      .catch((error) => {
        console.error("Error inserting game play data", { error });
      });
  }
  return {
    gameData: data,
    ...storageData,
  };
};