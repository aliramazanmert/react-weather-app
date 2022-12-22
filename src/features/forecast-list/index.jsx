import React from "react";
import moment from "moment";
import { useForecasts } from "./hooks";
import * as S from "./styles";

const ForecastList = ({ coords, isGeolocationError }) => {
  const forecast = useForecasts(coords, isGeolocationError);

  const renderDailyForecastItem = (item) => (
    <S.ForecastItem key={item.date_epoch}>
      <div>{moment.unix(item.date_epoch).format("dddd")}</div>
      <div>
        <S.Icon src={item.day.condition.icon} alt="forecast-weather" />
      </div>
      <div>{Math.round(item.day.maxtemp_c)}</div>
      <S.MinTemp>{Math.round(item.day?.mintemp_c)}</S.MinTemp>
    </S.ForecastItem>
  );

  const renderHourlyForecastItem = (item, idx) => (
    <S.HourlyForecastItem key={item.date_epoch}>
      <div>{idx === 0 ? "Now" : moment.unix(item.time_epoch).format("HH:mm")}</div>
      <div>
        <S.HourlyIcon src={item.condition.icon} alt="hourly-forecast-weather" />
      </div>
      <div>{Math.round(item.temp_c)}</div>
    </S.HourlyForecastItem>
  );

  return (
    <S.Container>
      <S.HourlyForecastContainer>
        {forecast.data?.forecast?.forecastday?.[0]?.hour
          ?.slice(0, 6)
          ?.map(renderHourlyForecastItem)}
      </S.HourlyForecastContainer>
      <S.DailyForecastContainer>
        {forecast.data?.forecast?.forecastday?.map(renderDailyForecastItem)}
      </S.DailyForecastContainer>
    </S.Container>
  );
};

export default ForecastList;
