import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

import BackgroundImage from './BackgroundImage';

const IndexHeader = ({ backgroundSrc }) => (
  <Container className="kruszcz-header">
    <Row>
      <Image src={backgroundSrc} fluid />
    </Row>
    <Row>
      <Col>
        <h1>
          <NavLink to="/">
            Kruszczykovelove
          </NavLink>
        </h1>
        <h2>Zuzanna Borowiecka i Bartek Kruszczyński</h2>
        <h2>Zapraszają na swój ślub!</h2>
      </Col>
    </Row>
  </Container>
);

export default IndexHeader;
