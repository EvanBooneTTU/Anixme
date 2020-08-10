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

const AnimeCard = (props) => {
  //Will receive props.src for image source, props.url for Link, props.animeName for name,
  return (
    <Card>
      <AnimeLink to={"/anime/" + props.animeURLTitle + "/"}>
        <AnimeImage src={props.animeImage} alt={props.animeTitle} />
        <AnimeTitle>{props.animeTitle}</AnimeTitle>
      </AnimeLink>
    </Card>
  );
};

export default AnimeCard;
