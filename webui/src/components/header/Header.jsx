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
          <div className='nav-group'>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' onClick={handleShow} className="offcanvas-toggle"/>
            <Navbar.Offcanvas show={showOffcanvas} onHide={handleClose} id="offcanvasNavbar-expand-lg" aria-labelledby='offcanvasNavbarLabel-expand' placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                  <img id='logo-offcanvas' src={logo} alt='Logo'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='offcanvas-body'>
                <Nav className="nav justify-content-end flex-grow-1">
                  <NavLink className="nav-link" to="/" activeClassName="active" onClick={handleClose}>Pet Insurance</NavLink>
                  <NavLink className="nav-link" to="/about-us" activeClassName="active" onClick={handleClose}>About Us</NavLink>
                  <NavLink className="nav-link" to="/contact-us" activeClassName="active" onClick={handleClose}>Contact Us</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <NavLink id='nav-link-quote' className="nav-link" to="/#quote">Quote</NavLink>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}
