import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Col>
          <Carousel className="carousel-fullwidth w-100 m-0">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/headerslide1.svg"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/headerslide2.svg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/headerslide3.svg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
