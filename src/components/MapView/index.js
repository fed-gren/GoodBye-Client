import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NaverMap, { Marker } from "react-naver-map";

import config from "../../../config/config";

import RandomButton from "../RandomButton";

const MapViewWrapper = styled.div`
  flex-grow: 1;
  background-color: #fdcb6e;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 101;
`;

const MapView = props => {
  return (
    <MapViewWrapper>
      <NaverMap
        clientId={config.ncpClientId}
        ncp
        style={{ width: "100%", height: "100%" }}
        initialPosition={{
          lat: config.defaultLatitude,
          lng: config.defaultLongitude
        }}
      >
        {props.markers &&
          props.markers.map(marker => (
            <Marker
              key={marker._id}
              lat={marker.positionX}
              lng={marker.positionY}
              onClick={event => alert(`${marker._id} ${marker.name}`)} // id: given id, event: PointerEvent
              shape={{
                coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12],
                type: "poly"
              }} // click mask shape
            />
          ))}
      </NaverMap>
      <RandomButton />
    </MapViewWrapper>
  );
};

export default MapView;
