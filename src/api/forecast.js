import axios from "../axios";

export const getWeatherForecast = async (lat, lon) => {
  const { data } = await axios.get("/forecast.json", {
    params: {
      q: `${lat},${lon}`,
      days: 7,
    },
  });
  return data;
};
