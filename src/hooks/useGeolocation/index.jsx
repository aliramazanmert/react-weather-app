import { useGeolocated } from "react-geolocated";

// Not used at the moment but will keep it
// just in case of a revert to this usage in the future
export const useGeolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();

  const getGeolocationError = () => {
    if (!isGeolocationAvailable) {
      return "Your browser does not support Geolocation";
    }
    if (!isGeolocationEnabled) {
      return "Geolocation is not enabled";
    }

    return null;
  };

  return {
    coords,
    error: getGeolocationError(),
  };
};
