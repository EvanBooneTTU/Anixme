import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import AnimeVideo from "./AnimeVideo";

const Container = styled.div`
  width: 1135px;
  top: -330px;
  padding-left: 30px;
  position: relative;
  float: left;
`;

const AnimePageMainArea = (props) => {
  const pageStatus = useParams().pageStatus;
  if (pageStatus === "Overview") {
    return <Container></Container>;
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
