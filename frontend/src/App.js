import React, { useState } from "react";
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
import Anime from "./Pages/Anime";
import Search from "./Pages/Search";
import EmptySearch from "./Pages/EmptySearch";
import { ThemeProvider } from "emotion-theming";
//import lightTheme from "./styles/light";
//import darkTheme from "./styles/dark";
import styled from "@emotion/styled";

const darkTheme = {
  color: {
    background: "#0C1622",
    alternateBackground: "#151F2F",
    text: "#9FADBD",
  },
};

const lightTheme = {
  color: {
    background: "#E5EBF0",
    alternateBackground: "#FBFBFB",
    text: "#26343F",
  },
};

const Button = styled.button`
  color: ${(props) => props.theme.color.background};
`;

const Container = styled.div`
  background: ${(props) => props.theme.color.background};
`;

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  const handleDarkMode = function () {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Navbar darkModeClick={handleDarkMode} darkMode={isDarkMode} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Browse/Page:pageNumber" exact>
              <Browse darkMode={isDarkMode} />
            </Route>
            <Route path="/Popular" exact>
              <Popular />
            </Route>
            <Route
              path="/Anime/:URLTitle/:pageStatus/(Episode)?/:episode?"
              exact
            >
              <Anime />
            </Route>
            <Route path="/Search/" exact>
              <EmptySearch />
            </Route>
            <Route path="/Search/:search" exact>
              <Search />
            </Route>
          </Switch>
          <MobileNavbar />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
