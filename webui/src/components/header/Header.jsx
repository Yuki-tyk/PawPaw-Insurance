import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from 'react';

import logo from '../../assets/logo-transparent.png';
import './Header.css';

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img id='logo' src={logo} alt='Logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' onClick={handleShow}/>
          <Navbar.Offcanvas show={showOffcanvas} onHide={handleClose} id="offcanvasNavbar-expand-lg" aria-labelledby='offcanvasNavbarLabel-expand' placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                <img id='logo-offcanvas' src={logo} alt='Logo'/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={handleClose}>Home</NavLink>
                <NavLink className="nav-link" to="/pet-insurance" activeClassName="active" onClick={handleClose}>Pet Insurance</NavLink>
                <NavLink className="nav-link" to="/about" activeClassName="active" onClick={handleClose}>About Us</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}
