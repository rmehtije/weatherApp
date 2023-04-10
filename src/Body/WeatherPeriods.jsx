import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";

function WeatherPeriods({ currentWeather }) {
  return (
    <Tabs defaultActiveKey="current" className="mb-3" fill>
      <Tab eventKey="current" title="Current Weather">
        <Data {...currentWeather}/>
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <Data />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
