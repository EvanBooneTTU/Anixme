import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 860px;
  @media (max-width: 1350px) {
    width: 100vw;
    margin-top: 200px;
    padding-left: 2vw;
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
  text-align: center;
`;

const VideoContainer = styled.div`
  height: 430px;
  width: 781px;
  margin-left: 38px;

  @media (max-width: 1350px) {
    width: 100vw;
    padding-bottom: 50px;
    margin-left: -20px;
  }
`;

const CharacterArea = styled.div`
  padding-left: 20px;

  @media (max-width: 1350px) {
    padding-left: 0px;
  }
`;

const AnimePageOverview = (props) => {
  let width = window.innerWidth;
  return (
    <Container>
      <CharacterArea>
        <h2>Characters</h2>
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
      </CharacterArea>
      {props.trailer && (
        <VideoContainer>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=" + props.trailer.id}
            width={width < 1350 ? width + 0.01 * width : "781px"}
            height="430px"
            controls
            youtube
          />
        </VideoContainer>
      )}
    </Container>
  );
};

export default AnimePageOverview;
