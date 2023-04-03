import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import ExportForm from "./ExportForm";

function SideBar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm />
        <ExportForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideBar;
