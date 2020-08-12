import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import ExampleGQL from "./components/ExampleGQL";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Popular from "./Pages/Popular";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Browse/Page:pageNumber" exact>
          <Browse />
        </Route>
        <Route path="/Popular" exact>
          <Popular />
        </Route>
        <Route path="/Anime/:URLTitle" exact></Route>
      </Switch>
      <MobileNavbar />
    </Router>
  );
}

export default App;
