import { useQuery } from "react-query";
import { getCurrentWeather } from "../../api/weather";

export const useWeather = (coords, isGeolocationError) =>
  useQuery(
    ["weather", coords],
    () => {
      if (!coords) return;
      return getCurrentWeather(coords.latitude, coords.longitude);
    },
    {
      enabled: !isGeolocationError,
    }
  );
