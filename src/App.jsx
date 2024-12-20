import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage, { gamesLoader, userLoader } from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import HowToBuy from "./components/HowToBuy";
import RoadMap from "./components/RoadMap";
import RoadMap2 from "./components/RoadMap2";
import CallBack from "./components/CallBack";
import Leaderboard from "./components/Leaderboard";
import Game from "./components/Game";
import "./index.css";

const wireRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: gamesLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/about",
    element: <AboutUs />,
    loader: userLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/howtobuy",
    element: <HowToBuy />,
    loader: userLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/roadmap",
    element: <RoadMap />,
    loader: userLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/roadmap2",
    element: <RoadMap2 />,
    loader: userLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/callback",
    element: <CallBack />,
    // loader: credentialsLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/game/:gameName",
    element: <Game />,
    loader: gamesLoader,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
    errorElement: <div>notfound</div>,
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="CA: AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump"
        />
        <meta name="author" content="MemeGames.WTF" />
        <meta
          name="keywords"
          content="Gaming, Meme, Meme Games, Game Development, Gaming Studio"
        />
        {/* <link rel="icon" type="image/png" href="/assets/logo4.png" /> */}
      </Helmet>
      <RouterProvider router={wireRouter} basename={import.meta.env.BASE_URL} />
    </>
  );
}

export default App;
