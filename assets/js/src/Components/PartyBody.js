import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Icon from './Icon';

const PartyBody = () => (
  <Container>
    <Row className="kruszcz-container kruszcz-body center">
      <Col>
        <Icon src="./icons/drink.svg" />
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <p>
          Yes! Bierzemy ślub! Wydaje nam się, że nie trzeba
          robić szczególnej zapowiedzi tego
          wydarzenia!
          Będą tańce do białego rana, będzie jedzenie,
          będzie morze alkoholu.
        </p>
        <p>
          Widzimy się 11 stycznia 2020 o 20:00
          <br />
          Studio Bajka
          <br />
          Rydygiera 8 lok 20B
          <br />
          Warszawa
        </p>
        <p>
          Parking – trzeba wjechać na
          teren Instytutu Chemii Przemysłowej, za szlaban.
        </p>
        <p>
          Outfit: elegancko&nbsp;
          <span role="img" aria-label="top hat">🎩</span>
        </p>
      </Col>
    </Row>
  </Container>
);

export default PartyBody;
