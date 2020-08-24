import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import AnimeTooltip from "./AnimeTooltip";

const Card = styled.div`
  margin: 0;
  height: 520px;
  width: 300px;
  border-radius: 1px;
`;

const AnimeTitle = styled.div`
  font-size: 15px;
  margin: 0;
  font-weight: 700;
  color: ${(props) => props.theme.color.text};
`;

const AnimeImage = styled.img`
  width: 300px;
  height: 450px;
`;

const AnimeLink = styled(NavLink)`
  text-decoration: none;
`;

const AnimePageCard = styled.div`
  margin: 0;
  height: 320px;
  width: 215px;
  border-radius: 1px;
  position: relative;
  top: -130px;
  float: left;
  z-index: 2;
`;

const AnimePageImage = styled.img`
  width: 215px;
  height: 320px;
  box-shadow: 0 0 7px black;
`;

const BackgroundFill = styled.div`
  background-color: ${(props) => props.theme.color.alternateBackground};
  width: 220px;
  height: 190px;
  float: left;

  @media (max-width: 1350px) {
    background-color: ${(props) => props.theme.color.background};
  }
`;

const AnimeCard = (props) => {
  if (props.animePage) {
    return (
      <React.Fragment>
        <BackgroundFill></BackgroundFill>
        <AnimePageCard>
          <AnimePageImage src={props.src} alt={props.title} />
          <AnimeTitle>{props.title}</AnimeTitle>
        </AnimePageCard>
      </React.Fragment>
    );
  }
  return (
    <AnimeTooltip episodeCount={props.episodeCount} title={props.title}>
      <Card>
        <AnimeLink to={"/Anime/" + props.URLTitle + "/Overview"}>
          <AnimeImage src={props.src} alt={props.title} />
          <AnimeTitle>{props.title}</AnimeTitle>
        </AnimeLink>
      </Card>
    </AnimeTooltip>
  );
};

export default AnimeCard;
