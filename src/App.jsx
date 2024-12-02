import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage, { gamesLoader } from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import "./index.css";

const wireRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: gamesLoader,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <div>notfound</div>,
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="We are MemeGames.WTF" />
        <meta name="author" content="MemeGames.WTF" />
        <meta
          name="keywords"
          content="Gaming, Meme, Meme Games, Game Development, Gaming Studio"
        />
        {/* <link rel="icon" type="image/png" href="/assets/logo4.png" /> */}
      </Helmet>
      <RouterProvider router={wireRouter} />
    </>
  );
}

export default App;
