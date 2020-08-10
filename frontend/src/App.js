import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import AnimeCard from "./components/AnimeCard";
import AnimeGrid from "./components/AnimeGrid";
import MobileNavbar from "./components/MobileNavbar";
import ExampleGQL from "./components/ExampleGQL";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimeGrid>
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />
        <AnimeCard
          animeTitle="Sword Art Online"
          animeURLTitle="SwordArtOnline"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          animeTitle="naruto"
          animeURLTitle="naruto"
          animeImage="/Images/DUMMY_ANIME_IMAGE.jpg"
        />
      </AnimeGrid>
      <MobileNavbar />
    </Router>
  );
}

export default App;
