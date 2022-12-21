import React from "react";
import { useWeather } from "./hooks";

import * as S from "./styles";

const CurrentWeather = ({ coords, isGeolocationError }) => {
  const weather = useWeather(coords, isGeolocationError);

  return (
    <div>
      <S.City>{weather.data?.location?.name}</S.City>
      <S.Temperature>{weather.data?.current?.temp_c}</S.Temperature>
      <S.WeatherContainer>
        <img src={weather.data?.current?.condition?.icon} alt="weather" />
        <S.WeatherText>{weather.data?.current?.condition?.text}</S.WeatherText>
      </S.WeatherContainer>
    </div>
  );
};

export default CurrentWeather;
