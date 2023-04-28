import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({ selectedTab, defaultTab, currentWeather, forecastWeather }) {
  console.log("Map");

  const forecastDateTimeSelect = useSelector(
    (state) => state.forecastDateTimeSelect
  );

  const mapProps =
    selectedTab === defaultTab
      ? currentWeather
      : {
          main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
          coord: forecastWeather?.city.coord,
          weather: forecastDateTimeSelect?.weather,
        };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOLE_MAPS_API_KEY,
  });

  return isLoaded && mapProps?.coord && mapProps?.weather ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: mapProps?.coord.lat,
        lng: mapProps?.coord.lon,
      }}
      zoom={10}
    >
      <>
        <InfoWindow
          position={{
            lat: mapProps?.coord.lat,
            lng: mapProps?.coord.lon,
          }}
        >
          <>
            <div>{mapProps?.main?.temp}</div>
            <div>{mapProps?.weather[0]?.description}</div>
          </>
        </InfoWindow>
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
