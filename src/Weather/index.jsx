import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import "./Body.scss";
import WeatherPeriods from "./WeatherPeriods";
import Map from "./Map";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setShowSideBar } from "../services/stateService";

function Weather({
  currentWeather,
  forecastWeather,
  setCurrentWeather,
  setForecastWeather,
}) {
  console.log('Weather');
  const location = useLocation();
  const dispatch = useDispatch();

  const defaultTab = "current";

  const [selectedTab, setSelectedTab] = useState(
    location.pathname.includes("forecast") ? "forecast" : "current"
  );

  const handleShow = () => dispatch(setShowSideBar(true));

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
            selectedTab={selectedTab}
          />
        </Col>
        <Col md={8}>
          <Map 
            selectedTab={selectedTab} 
            defaultTab={defaultTab}
            currentWeather={currentWeather}
            forecastWeather={forecastWeather} />
        </Col>
      </Row>
      <SideBar
        handleClose={() => dispatch(setShowSideBar(false))}
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      />
    </>
  );
}

export default Weather;
