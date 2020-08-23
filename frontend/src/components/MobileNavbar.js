import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const NavbarWrapper = styled.div`
  position: relative;
  z-index: 999;

  @media (min-width: 780px) {
    display: none;
  }
`;

const Navbar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #151f2e;
  box-shadow: inset 0px 1px 12px 0px rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  @media (min-width: 780px) {
    display: none;
  }
`;

const NavItem = styled.img`
  width: 50px;
  height: 50px;

  align-items: center;
`;

const DarkThemeIcon = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  cursor: pointer;
  align-items: center;
`;

const MobileNavbar = (props) => {
  return (
    <NavbarWrapper>
      <Navbar>
        <NavLink to="/">
          <NavItem src="/Images/home.png" />
        </NavLink>
        <NavLink to="/Popular/">
          <NavItem src="/Images/heart.png" />
        </NavLink>
        <NavLink to="/Search/">
          <NavItem src="/Images/search.png" />
        </NavLink>
        <NavLink to="/Browse/Page1">
          <NavItem src="/Images/book.png" />
        </NavLink>
        <DarkThemeIcon onClick={props.darkModeClick}>
          {props.darkMode ? (
            <WbSunnyIcon style={{ fill: "#FFFF66" }} fontSize="large" />
          ) : (
            <Brightness3Icon style={{ fill: "black" }} fontSize="large" />
          )}
        </DarkThemeIcon>
      </Navbar>
    </NavbarWrapper>
  );
};

export default MobileNavbar;
