import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Switch from "react-switch";

import BackButton from "../BackButton";

const MyHeader = styled.header`
  display: flex;
  height: 3rem;
  background: #eee;
  padding: 0.2rem 1rem;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 104;

  & > h1 {
    font-size: 1rem;
  }

  & > .toggleSwitch {
    position: absolute !important;
    right: 1rem;
    top: 0.8rem;
  }
`;

const WeatherIcon = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
`;

const MapHeader = props => {
  const toggle = _ => {
    props.toggleMapShowFlag(!props.mapShowFlag);
  };

  return (
    <MyHeader>
      <BackButton />
      <h1>맛집</h1>
      {/* <WeatherIcon>
        <FaBeer />
      </WeatherIcon> */}
      <Switch
        className="toggleSwitch"
        checked={props.mapShowFlag}
        onChange={toggle}
        onColor="#aaa"
        offColor="#000"
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "#fff",
              paddingRight: 2
            }}
          >
            List
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "#000",
              paddingRight: 2
            }}
          >
            Map
          </div>
        }
        height={30}
        width={60}
      />
    </MyHeader>
  );
};
export default MapHeader;
