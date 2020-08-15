import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 215px;
  height: 650px;
  padding-left: 220px;
  position: relative;

  @media (max-width: 1350px) {
    width: 100vw;
    padding-left: 0px;
  }
`;

const H2 = styled.h4`
  padding: 0;
  padding-left: 15px;
  padding-top: 12px;
  margin: 0;
  text-transform: capitalize;
  color: #97a1aa;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const H4 = styled.h4`
  padding: 0;
  padding-left: 15px;
  padding-top: 12px;
  margin: 0;
  text-transform: capitalize;
  color: #97a1aa;
  font-weight: normal;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const DataArea = styled.div`
  background-color: #151f2f;
  height: calc(100% - 10px);
  width: 100%;
  float: left;
  padding-top: 10px;
`;

const months = [
  "invalid",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const AnimeInfoPanel = (props) => {
  const format = props.episode_count === 1 ? "Movie" : "TV";
  let genres;
  if (props.genres) {
    genres = props.genres.join(", ");
  }
  return (
    <Container>
      <DataArea>
        <H2>Format</H2>
        <H4>{format ? format : "N/A"}</H4>
        <H2>Status</H2>
        <H4>{props.status ? props.status : "N/A"}</H4>
        <H2>Start Date</H2>
        <H4>
          {props.startDate
            ? months[props.startDate.month] +
              " " +
              props.startDate.day +
              " " +
              props.startDate.year
            : "N/A"}
        </H4>
        <H2>English</H2>
        <H4>{props.english ? props.english : "N/A"}</H4>
        <H2>Romaji</H2>
        <H4>{props.romaji ? props.romaji : "N/A"}</H4>
        <H2>Native</H2>
        <H4>{props.native ? props.native : "N/A"}</H4>
        <H2>Genres</H2>
        <H4>{props.genres ? genres : "N/A"}</H4>
      </DataArea>
    </Container>
  );
};

export default AnimeInfoPanel;
