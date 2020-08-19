import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const VideoContainer = styled.div`
  width: 860px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.alternateBackground};
  @media (max-width: 1350px) {
    padding-top: 150px;
    max-width: 750px;
    width: 100vw;
    max-height: 450px;
    height: 95vw;
  }
`;

const EpisodeContainer = styled.div`
  width: 860px;
  height: 100px;

  @media (max-width: 1350px) {
    max-width: 750px;
    width: 95vw;
  }
`;

const EpisodeNumberContainer = styled.div`
  height: 40px;
  width: 60px;
  float: left;
  padding-right: 25px;
  padding-bottom: 10px;
`;

const EpisodeBox = styled.div`
  height: 40px;
  width: 60px;
  background-color: ${(props) => props.theme.color.alternateBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
`;

const AnimeVideo = (props) => {
  const episodeNumber = useParams().episode;
  const URLTitle = useParams().URLTitle;
  let width = window.innerWidth;
  return (
    <React.Fragment>
      <VideoContainer>
        <ReactPlayer
          url={props.episodes[episodeNumber - 1]}
          width={width < 1350 ? width - 50 : "781px"}
          height={width < 1350 ? width - 100 : "550px"}
          controls
          file
        />
      </VideoContainer>
      <EpisodeContainer>
        <h1>Episodes</h1>
        {props.episodes.map((Episode, index) => (
          <EpisodeNumberContainer key={index}>
            <EpisodeBox
              style={{
                backgroundColor: episodeNumber == index + 1 ? "#0082A6" : "",
              }}
            >
              <ButtonLink
                to={"/Anime/" + URLTitle + "/Watch/Episode/" + (index + 1)}
                key={"button" + index}
              >
                <h4 style={{ margin: "0" }}>{index + 1}</h4>
              </ButtonLink>
            </EpisodeBox>
          </EpisodeNumberContainer>
        ))}
      </EpisodeContainer>
    </React.Fragment>
  );
};

export default AnimeVideo;
