import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import Tooltip from "@material-ui/core/Tooltip";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#151F2F",
    color: "rgba(0, 0, 0, 0.87)",
    width: 290,
    height: 160,
    fontSize: theme.typography.pxToRem(12),
    borderRadius: 10,
  },
}))(Tooltip);

const H4 = styled.h4`
  color: white;
`;

const H1 = styled.h1`
  color: #93b5cd;
`;

const GET_ANIME_INFO = gql`
  query GetAnimeInfo($name: String!) {
    Media(search: $name) {
      averageScore
      genres
      startDate {
        year
        month
        day
      }
    }
  }
`;

const months = [
  "invalid",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Auguat",
  "September",
  "October",
  "November",
  "December",
];

const TooltipDescription = styled.div``;

export default function AnimeTooltip(props) {
  const { classes } = props;
  const [getAnime, { called, loading, data }] = useLazyQuery(GET_ANIME_INFO, {
    onError(error) {
      console.log(error);
    },
  });

  if (!called) {
    getAnime({
      variables: {
        name: props.title,
      },
    });
  }

  if (!loading && called && data) {
    return (
      <div>
        <HtmlTooltip
          placement="right"
          title={
            <TooltipDescription>
              <H1 style={{ display: "inline", margin: "0" }}>
                {data.Media.startDate
                  ? months[data.Media.startDate.month] +
                    " " +
                    data.Media.startDate.year
                  : "N/A"}
              </H1>
              <div style={{ display: "inline", paddingTop: "10px" }}>
                <H1 style={{ display: "inline", paddingLeft: "30px" }}>
                  {data.Media.averageScore > 75 ? (
                    <InsertEmoticonIcon style={{ fill: "green" }} />
                  ) : data.Media.averageScore > 65 ? (
                    <InsertEmoticonIcon style={{ fill: "orange" }} />
                  ) : (
                    <InsertEmoticonIcon style={{ fill: "red" }} />
                  )}
                </H1>
              </div>
              <H1 style={{ display: "inline", margin: "0" }}>
                {data.Media.averageScore + "%"}
              </H1>
              <H4>{props.episodeCount === 1 ? "Movie" : "Tv Show"}</H4>
              <H4>
                {props.episodeCount === 1
                  ? ""
                  : props.episodeCount + " Episodes"}
              </H4>
              <H4>{data.Media.genres}</H4>
              <H4>Popularity: {data.Media.averageScore}</H4>
            </TooltipDescription>
          }
        >
          {props.children}
        </HtmlTooltip>
      </div>
    );
  } else {
    return (
      <div>
        <HtmlTooltip
          placement="right"
          title={
            <TooltipDescription>
              <H4>{props.title}</H4>
              <H4>{props.episodeCount === 1 ? "Movie" : "Tv Show"}</H4>
              <H4>
                {props.episodeCount === 1
                  ? ""
                  : props.episodeCount + " Episodes"}
              </H4>
            </TooltipDescription>
          }
        >
          {props.children}
        </HtmlTooltip>
      </div>
    );
  }
}
