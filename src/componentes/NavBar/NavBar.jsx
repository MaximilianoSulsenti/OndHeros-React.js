import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Container className="nav-container">
        <div>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src="/Ondheros-img/ondheroslogo.jpg" alt="Logo de la tienda" />
        </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link">
            <Nav.Link as={Link} to="/categoria/remeras">Remeras</Nav.Link>
            <Nav.Link as={Link} to="/categoria/billeteras">Billeteras</Nav.Link>
            <Nav.Link as={Link} to="/categoria/medias">Medias</Nav.Link>
               <div className="cart-mobile">
                <CartWidget />
              </div>
          </Nav>
        </Navbar.Collapse>
        </div>
          <div className="cart-desktop">
          <CartWidget />
         </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
