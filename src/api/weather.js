import axios from "../axios";

export const getCurrentWeather = async (lat, lon) => {
  const { data } = await axios.get("/current.json", {
    params: {
      q: `${lat},${lon}`,
    },
  });
  return data;
};
