import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import Event from './Event';

const Place = () => {
  return (
    <Container>
      <Row className="kruszcz-container kruszcz-body center">
        <Col>
          <Event
            iconSrc="./icons/wedding.svg"
            header="Ceremonia"
            text="Pałac Ślubów w Warszawie"
            date="10 stycznia 2020 o 14:30"
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p>
            Będzie nam bardzo miło widzieć Was na naszej ceremonii
            ślubnej w Pałacu Ślubów na Pl. Zamkowym 6 w Warszawie.
            Ceremonia odbędzie się w sali na 2 piętrze.
            Prosimy nie przyjeżdżajcie autem, przy Zamku nie da się
            zaparkować.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Place;
