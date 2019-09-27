import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import Event from './Event';

const Place = () => {
  return (
    <Container className="kruszcz-container kruszcz-body center">
      <Row>
        <Col>
          <Event
            iconSrc="./icons/wedding.svg"
            header="Ceremonia"
            text="Pałac Ślubów w Warszawie"
            date="10 stycznia 2020 o 14:30"        
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Place;
