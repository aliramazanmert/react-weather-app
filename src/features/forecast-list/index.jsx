import React from "react";
import moment from "moment";
import { useForecasts } from "./hooks";
import * as S from "./styles";

const ForecastList = ({ coords }) => {
  const forecast = useForecasts(coords);

  const forecastItem = (item) => (
    <S.ForecastItem key={item.date_epoch}>
      <div>{moment.unix(item.date_epoch).format("dddd")}</div>
      <div>
        <S.Icon src={item.day?.condition?.icon} alt="forecast-weather" />
      </div>
      <div>{Math.round(item.day?.maxtemp_c)}</div>
      <S.MinTemp>{Math.round(item.day?.mintemp_c)}</S.MinTemp>
    </S.ForecastItem>
  );

  return <S.Container>{forecast.data?.forecast?.forecastday?.map(forecastItem)}</S.Container>;
};

export default ForecastList;
