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
import { withTheme, ThemeProvider } from "emotion-theming";
import { css, Global } from "@emotion/core";
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

const makeGlobalStyles = (theme) => css`
  body {
    background: ${theme.color.background};
    color: ${theme.color.text};
  }
  text {
    color: ${theme.color.text};
  }
  h1,
  h2,
  h3,
  h4 {
    color: ${theme.color.text};
  }
`;

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

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
      <GlobalStyles />

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
          <Route path="/Anime/:URLTitle/:pageStatus/(Episode)?/:episode?" exact>
            <Anime />
          </Route>
          <Route path="/Search/" exact>
            <EmptySearch />
          </Route>
          <Route path="/Search/:search" exact>
            <Search />
          </Route>
        </Switch>
        <MobileNavbar darkModeClick={handleDarkMode} darkMode={isDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
