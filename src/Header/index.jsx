import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import moment from "moment";
import { FORECAST_DATE_FORMAT } from "../constants";

function Header({ list }) {
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Container>
        <Link to="/weatherApp" className="navbar-brand">
          <img
            alt=""
            src="/weatherApp/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp; Weather App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/weatherApp/contact" className="nav-link">
              Contact
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {list?.map(({ dt }, index) => (
                <Link
                  to={`/weatherApp/forecast/${index}`}
                  className="dropdown-item"
                  key={index}
                  data-rr-ui-dropdown-item
                >
                  {moment.unix(dt).format(FORECAST_DATE_FORMAT)}
                </Link>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
