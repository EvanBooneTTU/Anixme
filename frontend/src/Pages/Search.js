import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useHttpClient } from "../Hooks/http-hook";
import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";
import SearchBar from "../components/SearchBar";

function search(searchKey, myArray) {
  let newArr = [];
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].anime_name.toLowerCase().includes(searchKey.toLowerCase())) {
      newArr.push(myArray[i]);
    }
  }
  return newArr;
}

const SearchBarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

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

const LoadingContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
`;

const Search = (props) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedAnime, setloadedAnime] = useState();
  const searchQuery = useParams().search;
  let width = window.innerWidth;

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/Search/"
        );
        setloadedAnime(responseData.animeData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnime();
  }, [sendRequest]);

  if (isLoading || error || !loadedAnime) {
    return (
      <LoadingContainer>
        <H1>Loading</H1>
      </LoadingContainer>
    );
  }

  let Results = search(searchQuery, loadedAnime);

  if (Results.length == 0) {
    return (
      <LoadingContainer>
        <H1>No Anime Found</H1>;
      </LoadingContainer>
    );
  }
  return (
    <React.Fragment>
      {width <= 780 ? (
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      ) : null}
      <H1>Search Results</H1>
      <AnimeGrid>
        {Results.map((Anime) => (
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

export default Search;
