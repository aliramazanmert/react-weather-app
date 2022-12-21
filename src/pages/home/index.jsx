import React, { useState, useEffect } from "react";
import { useWeather } from "../../features/current-weather/hooks";
import { useForecasts } from "../../features/forecast-list/hooks";
import ForecastList from "../../features/forecast-list";
import CurrentWeather from "../../features/current-weather";
import Spin from "../../components/spin";

import * as S from "./styles";

const Home = () => {
  const [coords, setCoords] = useState();
  const forecast = useForecasts(coords);
  const weather = useWeather(coords);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(position.coords);
    });
  }, []);

  return (
    <S.Background>
      <S.Card>
        {forecast.isLoading || weather.isLoading ? (
          <Spin centered />
        ) : (
          <>
            <CurrentWeather coords={coords} />
            <ForecastList coords={coords} />
          </>
        )}
      </S.Card>
    </S.Background>
  );
};

export default Home;
