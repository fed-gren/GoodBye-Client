import React from "react";
import styled from "styled-components";

import StartButton from "../StartButton";
import SubButtonsView from "../SubButtonsView";

const ButtonWrapper = styled.div`
  height: 300px;
  flex: 1;
  display: grid;
  grid-gap: 0.5rem;
  padding: 0.5rem;
`;

const ButtonsView = props => {
  return (
    <ButtonWrapper>
      <StartButton />
      <SubButtonsView setSubInfoIndex={props.setSubInfoIndex} />
    </ButtonWrapper>
  );
};

export default ButtonsView;
