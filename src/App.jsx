import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage, { gamesLoader, userLoader } from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import HowToBuy from "./components/HowToBuy";
import RoadMap from "./components/RoadMap";
import RoadMap2 from "./components/RoadMap2";
import CallBack from "./components/CallBack";
// import Authentication from "./components/Authentication";
import Leaderboard, { totalLeaderboardLoader } from "./components/Leaderboard";
import Game, { gameLoader } from "./components/Game";
import "./index.css";
import RootLayout from "./components/RootLayout";
import GamrLeaderboard, {
  gameLeaderboardLoader,
} from "./components/GameLeaderBoard";
import Comic, { comicsLoader } from "./components/Comic";
// import PhantomCallBack from "./components/PhantomCallBack";
// import PhantomWallet2 from "./components/PhantomWallet2";
import GregPage2 from "./components/GregPage2";

const wireRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: userLoader,
    errorElement: <div>notfound</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: gamesLoader,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/greg",
        element: <GregPage2 />,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/about",
        element: <AboutUs />,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/howtobuy",
        element: <HowToBuy />,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/roadmap",
        element: <RoadMap />,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/roadmap2",
        element: <RoadMap2 />,
        errorElement: <div>notfound</div>,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
        loader: totalLeaderboardLoader,
        // errorElement: <div>notfound</div>,
      },
      {
        path: "/game-leaderboard/:gameId/:gameName",
        element: <GamrLeaderboard />,
        loader: gameLeaderboardLoader,
        // errorElement: <div>notfound</div>,
      },
      {
        path: "/comic",
        element: <Comic />,
        loader: comicsLoader,
        errorElement: <div>notfound</div>,
      },
    ],
  },
  {
    path: "/callback",
    element: <CallBack />,
    errorElement: <div>notfound</div>,
  },
  {
    path: "/game/:gameName",
    element: <Game />,
    loader: gameLoader,
    errorElement: <div>notfound</div>,
  },
  // {
  //   path: "/authenticationpage",
  //   element: <Authentication />,
  //   errorElement: <div>notfound</div>,
  // },
  // {
  //   path: "/phantomcallback",
  //   element: <PhantomCallBack />,
  //   errorElement: <div>notfound</div>,
  // },
  // {
  //   path: "/phantom",
  //   element: <PhantomWallet2 />,
  //   errorElement: <div>notfound</div>,
  // },
  // {
  //   path: "/phantom",
  //   element: <PhantomWallet />,
  //   errorElement: <div>notfound</div>,
  // },
  // {
  //   path: "*",
  //   element: <div>notfound</div>,
  // }
]);

function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const { data } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => data.subscription.unsubscribe();
  // }, [])
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
