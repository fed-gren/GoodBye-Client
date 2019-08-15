import React, { useState } from "react";
import styled from "styled-components";

const FilterItemBtn = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  bottom: ${props =>
    !props.foldFlag && props.bottomDistance ? props.bottomDistance : 2.5}rem;
  right: 1.2rem;
  background: url(${props => props.bgImage}) no-repeat center;
  background-size: cover;
  transition: 0.5s bottom;
  z-index: 102;
`;

const FilterItemButton = props => {
  const [selectedFlag, setSelectedFlag] = useState(true);
  const id = props.id;

  const clickHandler = _ => {
    props.onClick(id);
    setSelectedFlag(!selectedFlag);
  };

  return (
    <FilterItemBtn
      onClick={clickHandler}
      bottomDistance={props.bottomDistance}
      bgImage={selectedFlag ? props.selectedImage : props.unselectedImage}
      foldFlag={props.foldFlag}
    />
  );
};

export default FilterItemButton;
