import React, { useState } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 860px;
  padding-bottom: 650px;
  @media (max-width: 1350px) {
    width: 98vw;
    margin-top: 200px;
    padding-left: 2vw;
    background-color: #151f2f;
  }
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
  let width = window.innerWidth;
  return (
    <Container>
      <H2>Characters</H2>
      {props.characters
        ? props.characters.slice(0, 12).map((Character, index) => (
            <CharacterContainer>
              <CharacterImage
                src={Character.image.large}
                alt="Anime Character"
              />
              <H3>
                {Character.name.first
                  ? Character.name.first
                  : Character.name.full}
              </H3>
            </CharacterContainer>
          ))
        : null}
      {props.trailer && (
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + props.trailer.id}
          width={width < 1350 ? width - 50 : "781px"}
          height="430px"
          controls
          youtube
        />
      )}
    </Container>
  );
};

export default AnimePageOverview;
