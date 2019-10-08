import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Event from './Event';
import Clickable from './Clickable';

const VenueCol = ({ children }) => (
  <Col xs={12} s={12} md={4}>
    {children}
  </Col>
);

const Venues = () => (
  <Container>
    <Row className="kruszcz-container kruszcz-body center">
      <VenueCol>
        <Clickable to="/ceremonia">
          <Event
            iconSrc="./icons/wedding.svg"
            header="Ceremonia"
            date="10 stycznia 2020 o 14:30"
          />
        </Clickable>
      </VenueCol>
      <VenueCol>
        <Clickable to="/obiad">
          <Event
            iconSrc="/icons/table.svg" 
            header="Obiad"
            date="10 Stycznia 2020 około 15:30"
          />
        </Clickable>
      </VenueCol>
      <VenueCol>
        <Clickable to="/party">
          <Event
            iconSrc="/icons/drink.svg"
            header="Przyjęcie"
            date="11 Stycznia 2020 o 20:00"
          />
        </Clickable>
      </VenueCol>
    </Row>
  </Container>
);

export default Venues;
