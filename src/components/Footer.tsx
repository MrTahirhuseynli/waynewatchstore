import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer text-white py-4">
      <Container fluid>
        <Row>
          {/* Adress */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Adress</h5>
            <p>
              Çınarcık <br />
              Yalova, Turkiye<br />
              7777
            </p>
          </Col>

          {/* e poçt */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Contact</h5>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              mrtahir@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +994999999999
            </p>
          </Col>

          {/* Websayt */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Website</h5>
            <p>
              <i className="bi bi-globe2 me-2"></i>
              <a href="https://www.WayneCollection.com" className="text-white text-decoration-none">
              www.WayneCollection.com
              </a>
            </p>
          </Col>

          {/* Social */}
          <Col md={3} sm={6} className="mb-3">
            
            <a href="https://www.instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Wayne Watch Store.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
