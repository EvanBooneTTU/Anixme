import React from "react";
import styled from "@emotion/styled";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";

const H1 = styled.h1`
  color: #979ca0;
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
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />
        <AnimeCard
          title="Sword Art Online"
          URLTitle="SwordArtOnline"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />{" "}
        <AnimeCard
          title="naruto"
          URLTitle="naruto"
          src="/Images/DUMMY_ANIME_IMAGE.jpg"
        />
      </AnimeGrid>
    </React.Fragment>
  );
};

export default Popular;
