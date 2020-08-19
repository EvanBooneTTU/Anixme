import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.color.alternateBackground};
  z-index: 999;
  position: relative;

  @media (max-width: 780px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 89%;
  margin: 0 auto;
`;

const NavButton = styled.button`
  all: unset;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: #3cbbd6;
  &:hover {
  }
`;

const RightButtonList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const RightButtonListItem = styled.li`
  margin-left: 2rem;
  cursor: pointer;
`;

const DarkModeButton = styled.button`
  all: unset;
`;

const DarkModeImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <Container>
        <NavButton>
          <ButtonLink to="/" style={{ fontSize: "33px" }}>
            AniXme
          </ButtonLink>
        </NavButton>
        <SearchBar />
        <RightButtonList>
          <RightButtonListItem>
            <NavButton>
              <ButtonLink to="/">Home</ButtonLink>
            </NavButton>
          </RightButtonListItem>
          <RightButtonListItem>
            <NavButton>
              <ButtonLink to="/Popular/">Popular</ButtonLink>
            </NavButton>
          </RightButtonListItem>
          <RightButtonListItem>
            <NavButton>
              <ButtonLink to="/Browse/Page1">Browse</ButtonLink>
            </NavButton>
          </RightButtonListItem>
          <RightButtonListItem>
            <DarkModeButton onClick={props.darkModeClick}>
              {props.darkMode ? (
                <WbSunnyIcon style={{ fill: "#FFFF66" }} fontSize="large" />
              ) : (
                <Brightness3Icon style={{ fill: "#0C1622" }} fontSize="large" />
              )}
            </DarkModeButton>
          </RightButtonListItem>
        </RightButtonList>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
