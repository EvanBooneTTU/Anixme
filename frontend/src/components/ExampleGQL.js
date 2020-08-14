import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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
      id
      bannerImage
    }
  }
`;

function ExampleGQL() {
  const search = "naruto";
  const { data, loading, error } = useQuery(GET_ANIME_INFO, {
    variables: { name: search },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return <img src={data.Media.bannerImage} alt="Banner" />;
}

export default ExampleGQL;
