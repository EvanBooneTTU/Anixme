import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";
import { useHttpClient } from "../Hooks/http-hook";
import NextPageButtonBar from "../components/NextPageButtonBar";

const H1 = styled.h1`
  margin: 0;
  padding-left: 6rem;
  padding-top: 2rem;

  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding-left: 0;
  }
`;

const LoadingContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
`;

const Browse = (props) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedAnime, setloadedAnime] = useState();
  const pageNumber = parseInt(useParams().pageNumber);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/browse/page" + pageNumber
        );
        setloadedAnime(responseData.animeData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnime();
  }, [sendRequest, pageNumber]);

  return (
    <React.Fragment>
      <H1>Browse</H1>
      {error && (
        <LoadingContainer>
          <H1>An Error has ocurred, please refresh.</H1>
        </LoadingContainer>
      )}
      {isLoading && (
        <LoadingContainer>
          <H1>Loading</H1>
        </LoadingContainer>
      )}
      <AnimeGrid>
        {loadedAnime &&
          !error &&
          loadedAnime.map((Anime) => (
            <AnimeCard
              title={Anime.anime_name}
              URLTitle={Anime.api_anime_name}
              episodeCount={Anime.episode_count}
              src={"/Images/AnimeCovers/" + Anime.api_anime_name + ".jpg"}
              key={Anime.index}
            />
          ))}
      </AnimeGrid>
      <NextPageButtonBar darkMode={props.darkMode} currentPage={pageNumber} />
    </React.Fragment>
  );
};

export default Browse;
