import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../Hooks/http-hook";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import AnimeBanner from "../components/AnimeBanner";
import AnimeCard from "../components/AnimeCard";
import AnimePageDescription from "../components/AnimePageDescription";
import AnimeInfoPanel from "../components/AnimeInfoPanel";
import AnimeViewButtons from "../components/AnimeViewButtons";
import AnimePageMainArea from "../components/AnimePageMainArea";

const GET_ANIME_INFO = gql`
  query GetAnimeInfo($name: String!) {
    Media(search: $name) {
      title {
        romaji
        english
        native
        userPreferred
      }
      episodes
      description
      id
      bannerImage
      status
      startDate {
        year
        month
        day
      }
      genres
    }
  }
`;

const Anime = (props) => {
  //Logic for getting anime data from mongoDB (episodes, name, cover image)
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedAnime, setloadedAnime] = useState();
  const URLTitle = useParams().URLTitle;
  //anilist API Query
  const [getAnime, { called, loading, data }] = useLazyQuery(GET_ANIME_INFO);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/anime/" + URLTitle
        );
        setloadedAnime(responseData.animeData[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnime();
  }, [sendRequest, URLTitle]);

  if (isLoading || error) {
    return null;
  }

  //Logic for getting anime data from anilist (Descriptions, tags, banner, trailer, etc.)
  if (loadedAnime && !loading && !called) {
    getAnime({
      variables: {
        name: loadedAnime.anime_name,
      },
    });
  }

  if (loading || !data) {
    return null;
  }

  if (data) {
    //Removes any html elements or Source() elements from the api returned desription
    let description = data.Media.description.replace(/<.*>/g, "");
    description = description.replace(/\(Source.*\)/g, "");

    return (
      <React.Fragment>
        <AnimeBanner src={data.Media.bannerImage} />
        <AnimeCard
          src={"/Images/AnimeCovers/" + loadedAnime.api_anime_name + ".jpg"}
          animePage={true}
        />
        <AnimePageDescription
          title={loadedAnime.anime_name}
          description={description}
        />
        <AnimeViewButtons />
        <AnimeInfoPanel
          episode_count={loadedAnime.episodes}
          status={data.Media.status.toLowerCase()}
          startDate={data.Media.startDate}
          english={data.Media.title.english}
          romaji={data.Media.title.romaji}
          native={data.Media.title.native}
          genres={data.Media.genres}
        />
        <AnimePageMainArea episodes={loadedAnime.episodes} />
      </React.Fragment>
    );
  }
};

export default Anime;
