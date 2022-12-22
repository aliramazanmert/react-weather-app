import axios from "axios";
import config from "./config";

export default axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
  timeout: 10000,
  params: {
    key: config.WEATHER_API_KEY,
  },
});
