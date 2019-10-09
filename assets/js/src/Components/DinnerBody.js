import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Icon from './Icon';

const DinnerBody = () => (
  <Container>
    <Row className="kruszcz-container kruszcz-body center">
      <Col>
        <Icon src="./icons/table.svg" />
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <p>
          Kochana rodzino! Po ceremonii ślubnej
          zapraszamy Was do restauracji ArtBistro na ul.
          Stalowej 52 na obiad, tort i wspólny czas.
        </p>
        <p>
          Nie musicie się martwić dojazdem, wystarczy
          zamówić taksówkę pod Zamek Królewski.
        </p>
      </Col>
    </Row>
  </Container>
);

export default DinnerBody;
