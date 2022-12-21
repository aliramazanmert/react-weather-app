import { useQuery } from "react-query";
import { getWeatherForecast } from "../../api/forecast";

export const useForecasts = (coords) =>
  useQuery(["forecast", coords], () => getWeatherForecast(coords.latitude, coords.longitude));
