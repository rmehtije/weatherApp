import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import moment from "moment";

function Header({ list }) {
  console.log('Header');
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp; Weather App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {list?.map(({ dt }, index) => (
                <Link
                  to={`/forecast/${index}`}
                  className="dropdown-item"
                  key={index}
                  data-rr-ui-dropdown-item
                >
                  {moment.unix(dt).format("DD.MM HH:mm")}
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
