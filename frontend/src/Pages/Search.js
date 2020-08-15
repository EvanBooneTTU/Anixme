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
    return <h1 style={{ color: "white", textAlign: "center" }}>Loading</h1>;
  }

  let Results = search(searchQuery, loadedAnime);

  if (Results.length == 0) {
    return (
      <h1 style={{ color: "white", textAlign: "center" }}>No Anime Found</h1>
    );
  }
  return (
    <React.Fragment>
      {width <= 780 ? (
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      ) : null}

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
