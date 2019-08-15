import React from "react";
import styled from "styled-components";
// import "./filterButton.css";

const FilterBtn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 2.5rem;
  right: 1.2rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: url(${props => props.filterImage}) no-repeat center;
  background-size: cover;
  z-index: 103;
`;

const FilterButton = props => {
  return <FilterBtn onClick={props.onClick} filterImage={props.filterImage} />;
};

export default FilterButton;
