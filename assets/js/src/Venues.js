import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import Event from './Event';

const Venues = () => {
  return (
    <Container>
      <Row className="kruszcz-body center kruszcz-container">
        <Col>
          <Event
            iconSrc="/icons/table.svg" 
            header="Kolacja"
            text="Art Bistro"
            date="10 Stycznia 2020"
          />
        </Col>
      </Row>
      <Row className="kruszcz-body center kruszcz-container">
        <Col>
          <Event
            iconSrc="/icons/drink.svg"
            header="Przyjęcie"
            text="Studio Bajka"
            date="11 Stycznia 2020"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Venues;
