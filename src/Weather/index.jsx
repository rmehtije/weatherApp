import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import "./Body.scss";
import WeatherPeriods from "./WeatherPeriods";
import { getCurrentWeather, getForecastWeather } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import Map from "./Map";
import { useLocation } from "react-router-dom";

function Weather() {
  const location = useLocation();

  const defaultTab = location.pathname.includes("forecast")
    ? "forecast"
    : "current";

  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const [forecastDateTimeSelect, setForecastDateTimeSelect] = useState(null);

  const handleShow = () => setShowSideBar(true);

  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentWeather(weather);
        console.log("weather", weather);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
    getForecastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
        console.log("forecast", forecast);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);

  const mapProps =
    selectedTab === defaultTab
      ? currentWeather
      : {
          main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
          coord: forecastWeather?.city.coord,
          weather: forecastDateTimeSelect?.weather,
        };


  return (
    <>
      <div className="my-2">
        <Button variant="primary" onClick={handleShow}>
          Search
        </Button>
      </div>
      <Row>
        <Col md={4}>
          <WeatherPeriods
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
            setSelectedTab={setSelectedTab}
            defaultTab={defaultTab}
            setForecastDateTimeSelect={setForecastDateTimeSelect}
            forecastDateTimeSelect={forecastDateTimeSelect}
          />
        </Col>
        <Col md={8}>
          <Map {...mapProps} />
        </Col>
      </Row>
      <SideBar
        show={showSideBar}
        handleClose={() => setShowSideBar(false)}
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      />
      <ErrorModal
        handleClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </>
  );
}

export default Weather;
