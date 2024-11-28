import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import "./index.css";

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
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<div>notfound</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
