import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import BackgroundImage from './BackgroundImage';


const Place = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Ceremonia zaślubin</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Pałac Ślubów w Warszawie</p>
          <p>10 stycznia 2020 o 14:30</p>
        </Col>
        <Col>
          <Image fluid src="images/palac.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Place;
