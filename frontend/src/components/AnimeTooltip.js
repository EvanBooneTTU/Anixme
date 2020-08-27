import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import Tooltip from "@material-ui/core/Tooltip";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Chip from "@material-ui/core/Chip";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#151F2F",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
    height: 140,
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

const TooltipDescription = styled.div`
  padding-left: 5px;
`;

const GenreChip = styled.div`
  padding-right: 10px;
  display: inline;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
`;

const Chips = styled.div`
  padding-top: 8px;
`;

const colors = [
  { background: "#3480EA", text: "#DFE3F6" },
  { background: "#E0D59E", text: "#6A6957" },
  { background: "#FFF280", text: "#B25B25" },
  { background: "#EBB62D", text: "#923713" },
  { background: "#9263E9", text: "#DCB3F4" },
  { background: "#EBB62D", text: "#933310" },
  { background: "#6EC8F2", text: "#2A5176" },
  { background: "#3480EA", text: "#E7EBFA" },
  { background: "#EBB62D", text: "#914218" },
  { background: "#E34F85", text: "#FDD1D9" },
  { background: "#D3E7F3", text: "#275B87" },
  { background: "#F2870D", text: "#6B450D" },
];

export default function AnimeTooltip(props) {
  const [chipBgColor, setChipBgColor] = useState("#F55124");
  const [chipTextColor, setChipTextColor] = useState("#F55124");

  const [getAnime, { called, loading, data }] = useLazyQuery(GET_ANIME_INFO, {
    onError(error) {
      console.log(error);
    },
  });

  function getRandomColor() {
    var item = colors[Math.floor(Math.random() * colors.length)];
    setChipBgColor(item.background);
    setChipTextColor(item.text);
  }

  if (!called) {
    getAnime({
      variables: {
        name: props.title,
      },
    });
  }

  useEffect(() => {
    getRandomColor();
  });

  if (
    !loading &&
    called &&
    data &&
    data.Media.startDate &&
    data.Media.averageScore
  ) {
    //Gets first 3 genres
    let genres = [];
    if (data.Media.genres) {
      genres = data.Media.genres.slice(0, 3);
    }

    return (
      <div>
        <HtmlTooltip
          placement="right"
          title={
            <TooltipDescription>
              <H1
                style={{
                  display: "inline",
                  margin: "0",
                }}
              >
                {data.Media.startDate
                  ? months[data.Media.startDate.month] +
                    " " +
                    data.Media.startDate.year
                  : "N/A"}
              </H1>
              <div
                style={{
                  display: "inline",
                  paddingTop: "10px",
                }}
              >
                <H1
                  style={{
                    display: "inline",
                    paddingLeft: "30px",
                    paddingRight: "5px",
                  }}
                >
                  {data.Media.averageScore > 75 ? (
                    <InsertEmoticonIcon style={{ fill: "green" }} />
                  ) : data.Media.averageScore > 65 ? (
                    <InsertEmoticonIcon style={{ fill: "orange" }} />
                  ) : (
                    <InsertEmoticonIcon style={{ fill: "red" }} />
                  )}
                </H1>
              </div>
              <H1
                style={{
                  display: "inline",
                  margin: "0",
                }}
              >
                {data.Media.averageScore + "%"}
              </H1>
              <H4 style={{ whiteSpace: "pre-wrap" }}>
                {props.episodeCount === 1
                  ? "Movie"
                  : "Tv Show    •    " + props.episodeCount + " Episodes"}
              </H4>
              <Chips>
                {genres.map((genre) => (
                  <GenreChip>
                    <Chip
                      label={genre}
                      style={{
                        color: chipTextColor,
                        backgroundColor: chipBgColor,
                      }}
                    />
                  </GenreChip>
                ))}
              </Chips>
            </TooltipDescription>
          }
        >
          {props.children}
        </HtmlTooltip>
      </div>
    );
  } else {
    return props.children;
  }
}
