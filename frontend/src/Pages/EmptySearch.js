import React from "react";
import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar";

const SearchBarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const EmptySearch = (props) => {
  let width = window.innerWidth;

  return (
    <React.Fragment>
      {width <= 780 ? (
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      ) : null}
    </React.Fragment>
  );
};

export default EmptySearch;
