import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

import SideBar from "./SideBar";
import WeatherPeriods from "./WeatherPeriods";
import Map from "./Map";

import { setShowSideBar } from "../services/stateService";

import "./Body.scss";

function Weather({
  currentWeather,
  forecastWeather,
  setCurrentWeather,
  setForecastWeather,
}) {
  // useLocation - react-router-dom hook dlja opredelenija url v kotorom my nahodimsa. 
  // Pri izmenenii url useLocation jesli on ostajotsa na tomzhe komponente to on zastovljajet komponent renderitsa.
  const location = useLocation();
  // useDispatch - peredajot funkcqju kotoraja kotoraja obshajetsa s reduxom.
  // dispatch trigerit redux i prinemajet v sebja triger sostojanija tojest akshen
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
