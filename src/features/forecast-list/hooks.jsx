import { useQuery } from "react-query";
import { getWeatherForecast } from "../../api/forecast";

export const useForecasts = (coords, isGeolocationError) =>
  useQuery(
    ["forecast", coords],
    () => {
      if (!coords) return;
      return getWeatherForecast(coords.latitude, coords.longitude);
    },
    {
      enabled: !isGeolocationError,
    }
  );
