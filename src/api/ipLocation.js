import axios from "axios";
import config from "../config";

export const getLocationWithIP = async () => {
  const { data } = await axios.get(
    `https://geolocation-db.com/json/${config.GEOLOCATION_DB_API_KEY}`
  );
  return data;
};
