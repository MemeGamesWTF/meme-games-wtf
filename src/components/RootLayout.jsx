import React from "react";
import "./HomePage.css";
import NavBar2 from "./NavBar2";
// import Footer from "./Footer2";
import { Outlet, useLoaderData } from "react-router-dom";
import { supabase } from "../supabaseClient";

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

const RootLayout = () => {
  const { screen_name, profile_image_url_https } = useLoaderData();
  return (
    <div className="homemain">
      <div className="main0">
        <NavBar2
          screen_name={screen_name}
          profile_image_url_https={profile_image_url_https}
        />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;

// export const gamesLoader = async () => {
//   const [games, storageData] = await Promise.all([
//     supabase.from("games").select("*").eq("enabled", true).order("created_at", { ascending: false }),
//     Object.fromEntries(
//       STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])
//     ),
//   ]);

//   return {
//     gamesData: games?.data,
//     ...storageData,
//   };
// };

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