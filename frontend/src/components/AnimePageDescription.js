import React from "react";
import styled from "@emotion/styled";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const Container = styled.div`
  height: 190px;
  width: calc(100vw - 755px);
  padding-right: 300px;
  float: left;
  background-color: ${(props) => props.theme.color.alternateBackground};
  overflow: hidden;

  @media (max-width: 1350px) {
    width: 98vw;
    padding-right: 0px;
    margin-top: -130px;
    position: relative;
    z-index: 101;
  }
`;

const TitleStyled = styled(LinesEllipsis)`
  margin-left: 30px;
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DescriptionStyled = styled(LinesEllipsis)`
  margin-left: 30px;
  font-size: 18px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const AnimePageDescription = (props) => {
  const Description = responsiveHOC()(DescriptionStyled);
  const Title = responsiveHOC()(TitleStyled);
  return (
    <Container>
      <Title
        text={props.title}
        maxLine="1"
        ellipses="..."
        trimRight
        basedOn="letters"
      />
      <Description
        text={props.description}
        maxLine="5"
        ellipses="..."
        trimRight
        basedOn="letters"
      />
    </Container>
  );
};

export default AnimePageDescription;
