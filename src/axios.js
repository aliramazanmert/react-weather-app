import axios from "axios";
import config from "./config";

export default axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
  timeout: 10000,
  params: {
    // TODO: put this api key to env file
    key: config.WEATHER_API_KEY,
  },
});
