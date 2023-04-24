import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({ coord, main, weather }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOLE_MAPS_API_KEY,
  });

  return isLoaded && coord && weather ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: coord.lat,
        lng: coord.lon,
      }}
      zoom={10}
    >
      <>
        <InfoWindow
          position={{
            lat: coord.lat,
            lng: coord.lon,
          }}
        >
          <>
            <div>{main?.temp}</div>
            <div>{weather[0]?.description}</div>
          </>
        </InfoWindow>
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
