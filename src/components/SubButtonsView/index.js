import React from "react";
import styled from "styled-components";

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;

  & button {
    width: 100%;
    height: 100%;
    background-color: #222;
    border-radius: 0.4rem;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    &:active {
      background-color: #444;
    }

    &:focus {
      outline: none;
    }
  }
`;

const SubButtonsView = props => {
  const [setOne, setTwo, setThree, setFour, setFive, setSix] = [
    () => props.setSubInfoIndex(1),
    () => props.setSubInfoIndex(2),
    () => props.setSubInfoIndex(3),
    () => props.setSubInfoIndex(4),
    () => props.setSubInfoIndex(5),
    () => props.setSubInfoIndex(6)
  ];

  return (
    <ButtonsGrid>
      <button onClick={setOne}>정보</button>
      <button onClick={setTwo}>캡슐커피계좌</button>
      <button onClick={setThree}>결제계좌</button>
      <button onClick={setFour}>밤코</button>
      <button onClick={setFive}>주사위</button>
      <button onClick={setSix}>가위바위보</button>
    </ButtonsGrid>
  );
};

export default SubButtonsView;
