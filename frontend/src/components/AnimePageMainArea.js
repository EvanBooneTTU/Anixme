import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import AnimeVideo from "./AnimeVideo";
import AnimePageOverview from "./AnimePageOverview";

const OverviewContainer = styled.div`
  width: 860px;
  top: -230px;
  padding-left: 30px;
  position: relative;
  float: left;
  background-color: ${(props) => props.theme.color.alternateBackground};
  background-clip: content-box;
  @media (max-width: 1350px) {
    width: 100vw;
    padding-left: 0px;
  }
`;

const VideoContainer = styled.div`
  width: 860px;
  top: -230px;
  padding-left: 30px;
  position: relative;
  float: left;
  @media (max-width: 1350px) {
    padding-left: 0px;
  }
`;

const AnimePageMainArea = (props) => {
  const pageStatus = useParams().pageStatus;
  if (pageStatus === "Overview") {
    return (
      <OverviewContainer>
        <AnimePageOverview
          characters={props.characters}
          trailer={props.trailer}
        />
      </OverviewContainer>
    );
  } else if (pageStatus === "Watch") {
    return (
      <VideoContainer>
        <AnimeVideo episodes={props.episodes} />
      </VideoContainer>
    );
  } else {
    return null;
  }
};

export default AnimePageMainArea;
