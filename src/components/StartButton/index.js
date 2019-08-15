import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StartBtn = styled.button`
  width: 100%;
  height: 100%;
  background: #0984e3;
  color: #f5f5f5;
  border-radius: 0.5rem;
  font-size: 2rem;
  background-color: #005ea8;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StartButton = _ => {
  return (
    <Link to="/map">
      <StartBtn>코쿼 맛집 지도</StartBtn>
    </Link>
  );
};

export default StartButton;
