import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #151f2f;

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
  width: 80%;
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

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavButton>
          <ButtonLink to="/">AniXme</ButtonLink>
        </NavButton>
        <NavButton>
          <ButtonLink to="/">Search Bar Here</ButtonLink>
        </NavButton>

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
              <ButtonLink to="/Browse/">Browse</ButtonLink>
            </NavButton>
          </RightButtonListItem>
        </RightButtonList>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
