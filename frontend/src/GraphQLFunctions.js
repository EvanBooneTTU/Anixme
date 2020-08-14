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

export function GetAnimeData(search) {
  const { data, loading, error } = useQuery(GET_ANIME_INFO, {
    variables: { name: search },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data.Media;
  // return <img src={data.Media.bannerImage} />;
}
