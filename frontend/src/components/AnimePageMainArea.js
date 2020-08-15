import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import AnimeVideo from "./AnimeVideo";
import AnimePageOverview from "./AnimePageOverview";

const Container = styled.div`
  width: 860px;
  top: -330px;
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
      <Container>
        <AnimePageOverview
          characters={props.characters}
          trailer={props.trailer}
        />
      </Container>
    );
  } else if (pageStatus === "Watch") {
    return (
      <Container>
        <AnimeVideo episodes={props.episodes} />
      </Container>
    );
  } else {
    return null;
  }
};

export default AnimePageMainArea;
