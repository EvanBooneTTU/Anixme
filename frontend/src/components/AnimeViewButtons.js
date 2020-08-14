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
`;

const ButtonsContainer = styled.div`
  padding-left: 470px;
  height: 100%;
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
