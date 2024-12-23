import React from "react";
import "./HomePage.css";
import { Link, useLoaderData } from "react-router-dom";

export const STORAGE_KEYS = [
  "oauth_token",
  "oauth_token_secret",
  "user_id",
  "name",
  "screen_name",
  "profile_banner_url",
  "location",
  "profile_image_url_https",
  "following",
];

const HomePage = () => {
  const { gamesData } = useLoaderData();
  return (
    <div className="main1">
      <div className="main2">
        {typeof gamesData !== undefined &&
          gamesData.length > 0 &&
          gamesData.map((game) => (
            <Link
              to={game.url === null ? "" : `/game/${game.name}`}
              key={game.name}
            >
              <div className="main3 group">
                <img
                  src={game.image}
                  alt={game.name}
                  loading="lazy"
                  className="imageclass"
                  onLoad={(e) => {
                    e.target.style.opacity = 1;
                  }}
                />
                <div className="main4"></div>
                <span className="spanclass">
                  <img
                    src={game.icon}
                    alt="Play Icon"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.style.opacity = 1;
                    }}
                  />
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;

export const gamesLoader = async () => {
  const response = await fetch(
    "https://gamesdata.movindusenuraaluthge.workers.dev/"
  );
  if (!response.ok) return [];
  const [gamesData, storageData] = await Promise.all([
    response.json(),
    Object.fromEntries(
      STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
    ),
  ]);

  return {
    gamesData,
    ...storageData,
  };
};

export const userLoader = async () => {
  const storageData = await Object.fromEntries(
    STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
  );
  return {
    ...storageData,
  };
};

export const logoutAction = () => {
  STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  window.location.reload();
}