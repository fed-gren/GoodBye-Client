import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import StartHeader from "../components/StartHeader";
import WeatherView from "../components/WeatherView";
import ButtonsView from "../components/ButtonsView";
import SubInfoView from "../components/SubInfoView";

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Start = _ => {
  const [onSubInfo, setOnSubInfo] = useState(-1);

  const setSubInfoIndex = idx => {
    setOnSubInfo(idx);
  };

  const closeSubInfoView = _ => {
    setOnSubInfo(-1);
  };

  return (
    <Layout>
      <StartWrapper>
        <StartHeader />
        <WeatherView />
        <ButtonsView setSubInfoIndex={setSubInfoIndex} />
        <SubInfoView
          onSubInfo={onSubInfo}
          closeSubInfoView={closeSubInfoView}
        />
      </StartWrapper>
    </Layout>
  );
};

export default Start;
