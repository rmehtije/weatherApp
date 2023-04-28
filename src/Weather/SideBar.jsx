import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import ExportForm from "./ExportForm";
import { useSelector } from "react-redux";

function SideBar({ handleClose, setCurrentWeather, setForecastWeather }) {
  console.log("SideBar");

  const show = useSelector((state) => state.showSideBar);

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
