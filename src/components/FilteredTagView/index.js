import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilteredTagsWrapper = styled.div`
  height: 50px;
  position: absolute;
  top: 4rem;
  left: 1rem;
  padding: 0.2rem 0.3rem;
  display: flex;
  align-items: center;
  z-index: 103;

  & > * {
    width: 60px;
    height: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0 0.2rem;
    border-radius: 0.4rem;
  }
`;

const FilteredTagView = props => {
  const tagTitles = props.selectedTitle;
  const [selectedTagTitles, setSelectedTagTitles] = useState([...tagTitles]);
  useEffect(() => {
    const abortController = new AbortController();
    setSelectedTagTitles([...props.selectedTitle]);

    return function cleanUp() {
      abortController.abort();
    };
  }, [props.selectedTitle]);

  return (
    <FilteredTagsWrapper>
      {selectedTagTitles.map(title => {
        return <li key={title}>{title}</li>;
      })}
    </FilteredTagsWrapper>
  );
};

export default FilteredTagView;
