import React from "react";
import styled from "@emotion/styled";

const BannerContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-top: -60px;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.color.background};
  z-index: 1;
  position: relative;
`;

const AnimeBanner = (props) => {
  return (
    <BannerContainer
      style={{ backgroundImage: "url(" + props.src + ")" }}
    ></BannerContainer>
  );
};

export default AnimeBanner;
