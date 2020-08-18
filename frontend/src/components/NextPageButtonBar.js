import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ButtonContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  padding-bottom: 75px;
`;

const IconButton = styled.button`
  all: unset;
  height: 50px;
  width: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.img`
  height: 30px;
  width: 30px;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: ${(props) => props.theme.color.text};
`;

const NextPageButtonBar = (props) => {
  const lastPage = 95;
  return (
    <ButtonContainer>
      {props.currentPage > 1 && (
        <IconButton>
          <ButtonLink to={"/Browse/Page" + (props.currentPage - 1)}>
            <ArrowBackIcon
              fontSize="large"
              style={{
                paddingTop: "5px",
                fill: props.darkMode ? "#9FADBD" : "#26343F",
              }}
            />
          </ButtonLink>
        </IconButton>
      )}
      <IconButton>
        <ButtonLink to={"/Browse/Page" + props.currentPage}>
          <Icon
            style={{ backgroundColor: props.darkMode ? "#151F2F" : "#FBFBFB" }}
          >
            {props.currentPage}
          </Icon>
        </ButtonLink>
      </IconButton>
      {props.currentPage < lastPage && (
        <IconButton>
          <ButtonLink to={"/Browse/Page" + (props.currentPage + 1)}>
            <Icon>{props.currentPage + 1}</Icon>
          </ButtonLink>
        </IconButton>
      )}
      {props.currentPage < lastPage - 1 && (
        <IconButton>
          <ButtonLink to={"/Browse/Page" + (props.currentPage + 2)}>
            <Icon>{props.currentPage + 2}</Icon>
          </ButtonLink>
        </IconButton>
      )}
      {props.currentPage < lastPage && (
        <IconButton>
          <ButtonLink to={"/Browse/Page" + (props.currentPage + 1)}>
            <ArrowForwardIcon
              fontSize="large"
              style={{
                paddingTop: "5px",
                fill: props.darkMode ? "#9FADBD" : "#26343F",
              }}
            />
          </ButtonLink>
        </IconButton>
      )}
    </ButtonContainer>
  );
};

export default NextPageButtonBar;
