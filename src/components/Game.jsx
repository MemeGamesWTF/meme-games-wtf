import React, { useEffect } from "react";
import {
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { supabase } from "../supabaseClient";
import { STORAGE_KEYS } from "./HomePage";
// import BackButton from "./TelegramBackButton"; // Import the BackButton component
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";

export default function Game() {
  const gameName = useParams().gameName;
  const navigate = useNavigate();
  const { gameData } = useLoaderData();

  console.log({ gameData });
  const url = gameData?.url;

  const goBack = () => {
    navigate(-1);
  };

  // const isTelegramMiniApp = window.Telegram?.WebApp !== undefined;

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
    } else {
      const handleMessage = async (event) => {
        // Verify message origin for security
        if (!event.origin.includes(new URL(url).origin)) return;

        if (event.data.type === "SEND_SCORE") {
          const { score, game } = event.data;
          const user_id = localStorage.getItem("user_id");
          const name = localStorage.getItem("name");
          // console.log({
          //   WebApp,
          //   isActive: WebApp.isActive,
          //   user: WebApp.initDataUnsafe,
          // });
          try {
            if (user_id && name) {
              const { error } = await supabase
                .from("scores")
                .insert({ score, user_id, name, game });

              if (error) throw error;
              console.log("Score successfully inserted from iframe");
            } else if (WebApp.isActive && WebApp.initDataUnsafe) {
              // this is fucking unsafe!!!!!
              const { error } = await supabase.from("scores").insert({
                score,
                user_id: WebApp.initDataUnsafe.user.id,
                name:
                  WebApp.initDataUnsafe.user.username ||
                  WebApp.initDataUnsafe.user.first_name,
                game,
                telegram: true,
              });

              if (error) throw error;
              console.log("Score successfully inserted telegram from iframe");
            }
          } catch (error) {
            console.error("Error sending score:", error);
          }
        }
      };

      window.addEventListener("message", handleMessage);
      return () => window.removeEventListener("message", handleMessage);
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
      {/* <BackButton /> Add the BackButton component */}
      {WebApp.isActive && WebApp.initDataUnsafe.user && (
        <BackButton onClick={goBack} />
      )}
      <iframe
        src={`${url}?random=${new Date().getTime()}`}
        title={gameName}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
allow="microphone; camera; autoplay; fullscreen"
      ></iframe>
    </div>
  );
}

export const gameLoader = async ({ params, request }) => {
  const { gameName } = params;
  if (!gameName) return redirect("/");
  const [game, storageData] = await Promise.all([
    supabase.from("games").select("*").eq("name", gameName),
    Object.fromEntries(
      STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
    ),
  ]);
  if (storageData.user_id) {
    const gamePlayData = {
      user_id: storageData.user_id,
      game_name: gameName,
      screen_name: storageData.screen_name,
    };
    if (WebApp.isActive && WebApp.initDataUnsafe.user) {
      gamePlayData.telegram = true;
      gamePlayData.user_id = WebApp.initDataUnsafe.user.id;
      gamePlayData.screen_name =
        WebApp.initDataUnsafe.user.username ||
        WebApp.initDataUnsafe.user.first_name;
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

  supabase
    .rpc("increment", { x: 1, row_id: game.data[0].id })
    .then((response) => {
      console.log("Game plays updated", { response });
    })
    .catch((error) => {
      console.error("Error inserting game play data", { error });
    });

  return {
    gameData: game?.data.length ? game.data[0] : null,
    ...storageData,
  };
};
