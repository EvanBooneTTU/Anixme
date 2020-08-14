import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const VideoContainer = styled.div`
  width: 1135px;
  height: 550px;
  background-color: black;
`;

const EpisodeContainer = styled.div`
  width: 1135px;
  height: 100px;
`;

const H1 = styled.h1`
  color: #97a1aa;
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
  background-color: #151f2f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: #97a1aa;
  &:hover {
  }
`;

const AnimeVideo = (props) => {
  const episodeNumber = useParams().episode;
  const URLTitle = useParams().URLTitle;
  return (
    <React.Fragment>
      <VideoContainer>
        <ReactPlayer
          url={props.episodes[episodeNumber - 1]}
          width="1135px"
          height="550px"
          controls
        />
      </VideoContainer>
      <EpisodeContainer>
        <H1>Episodes</H1>
        {props.episodes.map((Episode, index) => (
          <EpisodeNumberContainer key={index}>
            <EpisodeBox
              style={{
                backgroundColor:
                  episodeNumber == index + 1 ? "#0082A6" : "#151f2f",
              }}
            >
              <ButtonLink
                to={"/Anime/" + URLTitle + "/Watch/Episode/" + (index + 1)}
              >
                {index + 1}
              </ButtonLink>
            </EpisodeBox>
          </EpisodeNumberContainer>
        ))}
      </EpisodeContainer>
    </React.Fragment>
  );
};

export default AnimeVideo;
