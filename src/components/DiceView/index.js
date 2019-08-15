import React, { useState, useEffect } from "react";
import images from "./images";
import styled from "styled-components";

const Img = styled.img`
  width: 70%;
  margin-left: 2.5rem;
`;

const DiceView = _ => {
  const [diceNum, setDiceNum] = useState(0);
  useEffect(() => {
    setDiceNum(Math.floor(Math.random() * 6) + 1);
  }, []);

  return (
    <div>
      <Img src={images[diceNum]} alt="" />
    </div>
  );
};

export default DiceView;
