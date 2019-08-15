import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 0.4rem;
  background-color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:active {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
  }
`;

const BackButton = _ => {
  return (
    <Link to="/">
      <Button>뒤로 가기</Button>
    </Link>
  );
};

export default BackButton;
