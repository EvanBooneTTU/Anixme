import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  color: white;
`;

const NextPageButtonBar = (props) => {
  const lastPage = 95;
  return (
    <ButtonContainer>
      {props.currentPage > 1 && (
        <IconButton>
          <ButtonLink to={"/Browse/Page" + (props.currentPage - 1)}>
            <Icon>
              <IconImage src="/Images/arrowsBack.png" />
            </Icon>
          </ButtonLink>
        </IconButton>
      )}
      <IconButton>
        <ButtonLink to={"/Browse/Page" + props.currentPage}>
          <Icon style={{ backgroundColor: "lightgray" }}>
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
            <Icon>
              <IconImage src="/Images/arrowsForward.png" />
            </Icon>
          </ButtonLink>
        </IconButton>
      )}
    </ButtonContainer>
  );
};

export default NextPageButtonBar;
