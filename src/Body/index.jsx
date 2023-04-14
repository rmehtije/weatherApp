import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import "./Body.scss";
import WeatherPeriods from "./WeatherPeriods";
import { getCurrentWeather, getForecastWeather } from "../services/apiService";
import ErrorModal from "../ErrorModal";

function Body() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleShow = () => setShowSideBar(true);

  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
      console.log("weather", weather);
    });
    getForecastWeather().then((forecast) => {
      setForecastWeather(forecast);
      console.log("forecast", forecast);
    });
  }, []);

  return (
    <>
      <div className="my-2">
        <Button variant="primary" onClick={handleShow}>
          Search
        </Button>
        <Button variant="primary" onClick={() => setShowErrorModal(true)}>
          Show Error Modal
        </Button>
      </div>
      <Row>
        <Col md={4}>
          <WeatherPeriods
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
          />
        </Col>
        <Col md={8}>
          <div className="map-example"></div>
        </Col>
      </Row>
      <SideBar
        show={showSideBar}
        handleClose={() => setShowSideBar(false)}
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      />
      <ErrorModal
        show={showErrorModal}
        handleClose={() => setShowErrorModal(false)}
      />
    </>
  );
}

export default Body;
