import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #151f2e;
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

const MobileNavbar = () => {
  return (
    <NavbarWrapper>
      <NavLink to="/">
        <NavItem src="/Images/home.png" />
      </NavLink>
      <NavLink to="/">
        <NavItem src="/Images/heart.png" />
      </NavLink>
      <NavLink to="/">
        <NavItem src="/Images/search.png" />
      </NavLink>
      <NavLink to="/">
        <NavItem src="/Images/heart.png" />
      </NavLink>
      <NavLink to="/">
        <NavItem src="/Images/heart.png" />
      </NavLink>
    </NavbarWrapper>
  );
};

export default MobileNavbar;
