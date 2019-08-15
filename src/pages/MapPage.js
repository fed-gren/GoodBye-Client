import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import config from "../../config/config";

import MapHeader from "../components/MapHeader";
import MapView from "../components/MapView";
import FilterView from "../components/FilterView";
import ListView from "../components/ListView";

const MapPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #636e72;
  height: 100%;
`;

const MapPage = _ => {
  const [mapShowFlag, toggleMapShowFlag] = useState(true);
  const toggleMapView = _ => {
    toggleMapShowFlag(!mapShowFlag);
  };

  const fetchOptions = {
    url: `${config.goodbyeApiUrl}`
  };
  const { loading, error, data } = useFetch(fetchOptions);
  console.log(data);
  let markers = null;

  if (data) {
    markers = [...data.allRestaurant];
    console.log(markers);
  }

  return (
    <MapPageWrapper>
      <MapHeader
        mapShowFlag={mapShowFlag}
        toggleMapShowFlag={toggleMapShowFlag}
      />
      {mapShowFlag ? (
        <MapView markers={markers} />
      ) : (
        <ListView markers={markers} />
      )}
      {mapShowFlag && <FilterView />}
    </MapPageWrapper>
  );
};

export default MapPage;
