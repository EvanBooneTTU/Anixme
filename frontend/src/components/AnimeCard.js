import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  color: #8092ab;
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
  background-color: #151f2f;
  width: 220px;
  height: 190px;
  float: left;

  @media (max-width: 1350px) {
    background-color: #0c1622;
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
    <Card>
      <AnimeLink to={"/Anime/" + props.URLTitle + "/Overview"}>
        <AnimeImage src={props.src} alt={props.title} />
        <AnimeTitle>{props.title}</AnimeTitle>
      </AnimeLink>
    </Card>
  );
};

export default AnimeCard;
