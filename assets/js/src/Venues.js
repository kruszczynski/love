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
            header="Obiad"
            text="Art Bistro"
            date="10 Stycznia 2020 około 15:30"
          />
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
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p>
            Yes! Bierzemy ślub! Wydaje nam się, że nie trzeba
            robić szczególnej zapowiedzi tego
            wydarzenia... niech ta piosenka to zrobi:
            Będą tańce do białego rana, będzie jedzenie,
            będzie morze alkoholu.
          </p>
          <p>
            Parking dla ew. nie pijących – trzeba wjechać na
            teren Instytutu Chemii Przemysłowej, za szlaban.
          </p>
          <p>
            Outfit: elegancko 
          </p>
          <p>
            Prezenty:
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Venues;
