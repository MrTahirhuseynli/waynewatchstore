import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container fluid className="p-0">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-name">Wayne</span>
          <small className="brand-subtitle">Watch Store</small>
        </Navbar.Brand>

        {/* mobile navbar menu */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Link */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/" className="nav-link" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/men" className="nav-link">
              Men's Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to="/women" className="nav-link">
              Women's Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to="/smartwatches" className="nav-link">
              Smartwatches
            </Nav.Link>
            <Nav.Link as={NavLink} to="/stores" className="nav-link">
              Stores
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" className="nav-link">
              Product List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>

          {/* giriş ve sebet butonlar */}
          <div className="auth-cart d-flex align-items-center ms-3">
            <Nav.Link as={Link} to="/sign-in" className="btn btn-custom-blue me-2">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up" className="btn btn-custom-blue me-2">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="btn btn-outline-dark">
              🛒 Cart
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
