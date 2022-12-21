import React from "react";
import { useForceGeolocation } from "../../hooks/useForceGeolocation";
import { useWeather } from "../../features/current-weather/hooks";
import { useForecasts } from "../../features/forecast-list/hooks";
import ForecastList from "../../features/forecast-list";
import CurrentWeather from "../../features/current-weather";
import Renderer from "../../components/renderer";

import * as S from "./styles";

const Home = () => {
  const {
    coords,
    isError: isGeolocationError,
    isLoading: isGeolocationLoading,
  } = useForceGeolocation();
  const forecast = useForecasts(coords);
  const weather = useWeather(coords);

  return (
    <S.Background>
      <S.Card>
        <Renderer
          isLoading={forecast.isLoading || weather.isLoading || isGeolocationLoading}
          isError={forecast.isError || weather.isError || isGeolocationError}
          component={
            <>
              <CurrentWeather coords={coords} isGeolocationError={isGeolocationError} />
              <ForecastList coords={coords} isGeolocationError={isGeolocationError} />
            </>
          }
        />
      </S.Card>
    </S.Background>
  );
};

export default Home;
