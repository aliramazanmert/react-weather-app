import { useQuery } from "react-query";
import { getCurrentWeather } from "../../api/current";

export const useWeather = (coords) =>
  useQuery(["weather", coords], () => getCurrentWeather(coords.latitude, coords.longitude));
