import React from "react";
import styled from "styled-components";

const InfoView = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WeatherView = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconView = styled.div`
  width: 160px;
  height: 160px;
  background: url(${props => props.icon}) no-repeat center;
  background-size: 90%;
`;

const TempView = styled.div`
  width: 160px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const DateView = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 2rem;
  & > div {
    margin: 0.2rem 0;
  }
`;

const WeatherInfoView = props => {
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  const dateString = `${month}월 ${date}일`;
  const dayString = `${dayArr[new Date().getDay()]}요일`;

  return (
    <InfoView>
      <WeatherView>
        <IconView icon={props.icon} />
        <TempView>{props.temp}&#176;</TempView>
      </WeatherView>
      <DateView>
        <div>{dateString}</div>
        <div>{dayString}</div>
      </DateView>
    </InfoView>
  );
};

export default WeatherInfoView;
