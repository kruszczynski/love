import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import BackgroundImage from './BackgroundImage';

function App() {
  return (
    <BackgroundImage src="/images/wed1.jpg">
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
}

export default App;
