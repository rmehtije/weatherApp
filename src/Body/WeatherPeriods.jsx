import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({
  currentWeather,
  forecastWeather,
  setSelectedTab,
  defaultTab,
}) {
  return (
    <Tabs
      defaultActiveKey={defaultTab}
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current Weather">
        <Data {...currentWeather} />
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
