import React from "react";
import styled from "@emotion/styled";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";
import { PopularAnime } from "../PopularAnime";

const H1 = styled.h1`
  color: ${(props) => props.theme.color.text};
  margin: 0;
  padding-left: 6rem;
  padding-top: 2rem;

  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding-left: 0;
  }
`;

const Popular = (props) => {
  return (
    <React.Fragment>
      <H1>Popular</H1>
      <AnimeGrid>
        {PopularAnime.map((Anime) => (
          <AnimeCard
            title={Anime.anime_name}
            URLTitle={Anime.api_anime_name}
            episodeCount={Anime.episode_count}
            src={"/Images/AnimeCovers/" + Anime.api_anime_name + ".jpg"}
            key={Anime.index}
          />
        ))}
      </AnimeGrid>
    </React.Fragment>
  );
};

export default Popular;
