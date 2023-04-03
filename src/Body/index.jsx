import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import "./Body.scss";
import WeatherPeriods from "./WeatherPeriods";
import { getCurrentWeather } from "../services/apiService";

function Body() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleShow = () => setShowSideBar(true);

  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    });
  }, []);

  console.log("currentWeather", currentWeather);

  return (
    <>
      <div className="my-2">
        <Button variant="primary" onClick={handleShow}>
          Search
        </Button>
      </div>
      <Row>
        <Col md={4}>
          <WeatherPeriods />
        </Col>
        <Col md={8}>
          <div className="map-example"></div>
        </Col>
      </Row>
      <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} />
    </>
  );
}

export default Body;
