import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackgroundImage from './BackgroundImage';

const Header = () => {
  return (
    <BackgroundImage src="/images/wed1.jpg">
      <Container>
        <Row>
          <Col>
            <h1>Kruszczykowe Love</h1>
            <h2>Czyli wesele Zuzi i Bartka</h2>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Header;
