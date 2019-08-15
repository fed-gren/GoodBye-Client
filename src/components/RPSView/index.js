import React, { useState, useEffect } from "react";
import styled from "styled-components";
import images from "./images";

const Img = styled.img`
  width: 70%;
  margin-left: 2.5rem;
`;

const RPSView = _ => {
  const [rpsNum, setRpsNum] = useState(1);

  useEffect(() => {
    setRpsNum(Math.floor(Math.random() * 3) + 1);
  }, []);

  return (
    <div>
      <Img src={images[rpsNum]} alt="" />
    </div>
  );
};

export default RPSView;
