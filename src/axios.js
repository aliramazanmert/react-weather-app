import axios from "axios";

export default axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
  timeout: 10000,
  params: {
    // TODO: put this api key to env file
    key: "88756963a00e4b4394895246222012",
  },
});
