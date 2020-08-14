import React, { useState } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 860px;
  padding-bottom: 500px;
`;

const CharacterContainer = styled.div`
  height: 170px;
  width: 150px;
  float: left;
  padding-right: 60px;
`;

const CharacterImage = styled.img`
  height: 120px;
  width: 150px;
  float: left;
  padding-bottom: 5px;
`;

const H3 = styled.h3`
  margin: 0;
  color: #97a1aa;
  text-align: center;
`;

const H2 = styled.h2`
  color: #97a1aa;
`;

const AnimePageOverview = (props) => {
  return (
    <Container>
      <H2>Characters</H2>
      {props.characters.slice(0, 12).map((Character, index) => (
        <CharacterContainer>
          <CharacterImage src={Character.image.large} alt="Anime Character" />
          <H3>
            {Character.name.first ? Character.name.first : Character.name.full}
          </H3>
        </CharacterContainer>
      ))}
      {props.trailer && (
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + props.trailer.id}
          width="781px"
          height="430px"
          controls
          youtube
        />
      )}
    </Container>
  );
};

export default AnimePageOverview;
