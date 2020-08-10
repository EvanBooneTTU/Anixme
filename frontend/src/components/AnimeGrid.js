import React from "react";
import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  margin-top: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 2rem;
  justify-items: center;

  @media (max-width: 1730px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1432px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div``;

const AnimeGrid = (props) => {
  return (
    <Container>
      <Grid>{props.children}</Grid>
    </Container>
  );
};

export default AnimeGrid;
