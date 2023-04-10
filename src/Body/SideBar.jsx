import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import ExportForm from "./ExportForm";

function SideBar({ show, handleClose, setCurrentWeather, setForecastWeather }) {
  const [selectedData, setSelectedData] = useState(null);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm
          setCurrentWeather={setCurrentWeather}
          setForecastWeather={setForecastWeather}
          closeSideBar={handleClose}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
        />
        <ExportForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideBar;
