import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "../FilterButton";
import FilterItemButton from "../FilterItemButton";
import FilteredTagsView from "../FilteredTagView";
import images from "./images";

const FilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
`;

const FilterView = _ => {
  const [foldFlag, toggleFoldFlag] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([
    { id: "ko", idx: 0, title: "한식", showFlag: true },
    { id: "cn", idx: 1, title: "중식", showFlag: true },
    { id: "jp", idx: 2, title: "일식", showFlag: true },
    { id: "ws", idx: 3, title: "양식", showFlag: true }
  ]);

  const [selectedTitle, setSelectedTitle] = useState(
    selectedCategories.filter(c => c.showFlag).map(c => c.title)
  );

  const toggleCategoryById = id => {
    setSelectedCategories(
      selectedCategories.map(c => {
        if (c.id === id) c.showFlag = !c.showFlag;
        return c;
      })
    );
    console.log(selectedCategories);
    setSelectedTitle(
      selectedCategories.filter(c => c.showFlag).map(c => c.title)
    );
    console.log(selectedTitle);
  };

  const toggleFold = _ => {
    toggleFoldFlag(!foldFlag);
  };

  return (
    <FilterWrapper>
      <FilteredTagsView selectedTitle={selectedTitle} />
      <FilterButton
        foldFlag={foldFlag}
        onClick={toggleFold}
        filterImage={foldFlag ? images.filterButton : images.closeButton}
      />
      <FilterItemButton
        foldFlag={foldFlag}
        bottomDistance={8}
        selectedImage={images.koSelected}
        unselectedImage={images.koUnselected}
        id="ko"
        selectedCategories={selectedCategories}
        onClick={toggleCategoryById}
      />
      <FilterItemButton
        foldFlag={foldFlag}
        bottomDistance={13.5}
        selectedImage={images.cnSelected}
        unselectedImage={images.cnUnselected}
        id="cn"
        selectedCategories={selectedCategories}
        onClick={toggleCategoryById}
      />
      <FilterItemButton
        foldFlag={foldFlag}
        bottomDistance={19}
        selectedImage={images.jpSelected}
        unselectedImage={images.jpUnselected}
        id="jp"
        selectedCategories={selectedCategories}
        onClick={toggleCategoryById}
      />
      <FilterItemButton
        foldFlag={foldFlag}
        bottomDistance={24.5}
        selectedImage={images.wsSelected}
        unselectedImage={images.wsUnselected}
        id="ws"
        selectedCategories={selectedCategories}
        onClick={toggleCategoryById}
      />
    </FilterWrapper>
  );
};

export default FilterView;
