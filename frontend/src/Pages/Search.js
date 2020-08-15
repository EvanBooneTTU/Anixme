import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useHttpClient } from "../Hooks/http-hook";
import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import AnimeGrid from "../components/AnimeGrid";

function search(searchKey, myArray) {
  let newArr = [];
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].anime_name.toLowerCase().includes(searchKey.toLowerCase())) {
      newArr.push(myArray[i]);
    }
  }
  return newArr;
}

const Search = (props) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedAnime, setloadedAnime] = useState();
  const searchQuery = useParams().search;

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
  console.log(Results);

  if (Results.length == 0) {
    return (
      <h1 style={{ color: "white", textAlign: "center" }}>No Anime Found</h1>
    );
  }
  return (
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
  );
};

export default Search;
