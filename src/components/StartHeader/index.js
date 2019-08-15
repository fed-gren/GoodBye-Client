import React from "react";
import styled from "styled-components";
import config from "../../../config/config";

const MyHeader = styled.header`
  display: flex;
  height: 3rem;
  background: #eee;
  padding: 0.2rem 1rem;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 1rem;
  }
`;

const StartHeader = _ => {
  return (
    <MyHeader>
      <h1>{config.title}</h1>
    </MyHeader>
  );
};
export default StartHeader;
