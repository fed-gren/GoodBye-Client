import React from "react";
import styled from "styled-components";
import "./randomButton.css";

const RandomBtn = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 2rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  cursor: pointer;

  &:active {
    background-color: #ccc;
  }

  &:focus {
    outline: none;
  }

  & > div {
    width: 90%;
    height: 90%;
    position: absolute;
    margin: 0;
    left: 14px;
  }
`;

const RandomButton = _ => {
  return (
    <RandomBtn>
      <div className="btn-random" />
    </RandomBtn>
  );
};

export default RandomButton;
