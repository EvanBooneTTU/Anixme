import React, { useState } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #151f2f;
  float: left;
  margin-top: -130px;

  @media (max-width: 1350px) {
    width: 100vw;
    padding-top: 110px;
    padding-left: 30px;
    position: relative;
    z-index: 100;
  }
`;

const ButtonsContainer = styled.div`
  padding-left: 470px;
  height: 100%;
  @media (max-width: 1350px) {
    padding-left: 0px;
  }
`;

const Button = styled.button`
  all: unset;
  height: 100%;
  padding-right: 40px;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: #97a1aa;
  &:hover {
  }
`;

const AnimeViewButtons = (props) => {
  const pageStatus = useParams().pageStatus;
  const URLTitle = useParams().URLTitle;
  return (
    <Container>
      <ButtonsContainer>
        <Button>
          <ButtonLink
            to={"/Anime/" + URLTitle + "/Overview"}
            style={{ color: pageStatus === "Overview" ? "#3cbbd6" : "#97a1aa" }}
          >
            Overview
          </ButtonLink>
        </Button>
        <Button>
          <ButtonLink
            to={"/Anime/" + URLTitle + "/Watch/Episode/1"}
            style={{ color: pageStatus === "Watch" ? "#3cbbd6" : "#97a1aa" }}
          >
            Watch
          </ButtonLink>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default AnimeViewButtons;
