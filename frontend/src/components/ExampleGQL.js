import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ANIME_INFO = gql`
  {
    Media(search: "naruto") {
      title {
        romaji
        english
        native
        userPreferred
      }
      episodes
      id
    }
  }
`;

function ExampleGQL() {
  const { data, loading, error } = useQuery(GET_ANIME_INFO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      {data.Media.title.english}
    </div>
  );
}

export default ExampleGQL;
