import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({
  currentWeather,
  forecastWeather,
  setSelectedTab,
  selectedTab,
}) {
  return (
    <Tabs
      defaultActiveKey={selectedTab}
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current Weather">
        <Data {...currentWeather} selectedTab={selectedTab}/>
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect
          {...forecastWeather}
        />
        <Data {...forecastWeather?.city} selectedTab={selectedTab}/>
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
