import React from "react";
import styled from "@emotion/styled";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";
import { TopAnime } from "../TopAnime";

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

const Home = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <H1>Top of All Time</H1>
      <AnimeGrid>
        {TopAnime.map((Anime) => (
          <AnimeCard
            title={Anime.anime_name}
            URLTitle={Anime.api_anime_name}
            src={"/Images/AnimeCovers/" + Anime.api_anime_name + ".jpg"}
            key={Anime.index}
          />
        ))}
      </AnimeGrid>
    </React.Fragment>
  );
};

export default Home;
