import React from "react";
import styled from "styled-components";
import config from "../../../config/config";
import useFetch from "../../hooks/useFetch";
import WeatherInfoView from "../WeatherInfoView";
import CodeSquadLogoView from "../CodeSquadLogoView";
import images from "./images.js";

const WeatherLayout = styled.div`
  height: 560px;
  padding: 1rem;
  position: relative;
`;

const WeatherLoader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  font-size: 2rem;
`;

const WeatherView = _ => {
  const fetchOptions = {
    url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
      config.weatherApiKey
    }/${config.defaultLatitude},${
      config.defaultLongitude
    }?lang=ko&exclude=[minutely,hourly,daily,alerts,flags]&units=si`
  };

  const { loading, error, data } = useFetch(fetchOptions);
  let temp = null;
  let icon = null;
  if (data) {
    temp = Math.floor(data.currently.temperature);
    console.log(data);
    icon = data.currently.icon;
  }

  return (
    <WeatherLayout>
      {loading && <WeatherLoader>날씨 불러오는 중</WeatherLoader>}
      {icon && <div>{<WeatherInfoView icon={images[icon]} temp={temp} />}</div>}
      <CodeSquadLogoView />
    </WeatherLayout>
  );
};

export default WeatherView;
