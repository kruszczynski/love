import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Icon from './Icon';

const CeremonyBody = () => (
  <Container>
    <Row className="kruszcz-container kruszcz-body center">
      <Col>
        <Icon src="./icons/wedding.svg" />
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <p>
          Będzie nam bardzo miło widzieć Was na naszej ceremonii ślubnej w Pałacu Ślubów
          na Pl. Zamkowym 6 w Warszawie. Ceremonia odbędzie się 10 stycznia 2020 w sali na
          2 piętrze o 14:30.
        </p>
        <p>
          Prosimy nie przyjeżdżajcie autem, przy Zamku nie da się zaparkować.
        </p>
      </Col>
    </Row>
  </Container>
);

export default CeremonyBody;
