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
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </AnimeGrid>
      <MobileNavbar />
    </Router>
  );
}

export default App;
