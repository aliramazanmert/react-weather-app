import { useGeolocated } from "react-geolocated";
import { useQuery } from "react-query";

import { getLocationWithIP } from "../../api/ipLocation";

export const useForceGeolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
  const ipLocation = useQuery("ip_location", getLocationWithIP, {
    refetchInterval: false,
    enabled: !isGeolocationAvailable || !isGeolocationEnabled,
  });

  return {
    coords: coords || ipLocation.data,
    isLoading: (!coords && isGeolocationAvailable && isGeolocationEnabled) || ipLocation.isLoading,
    isError: ipLocation.isError,
  };
};
