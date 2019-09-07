import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

function App() {
  const [toast, setToast] = useState(false);
  const handleClick = () => {
    setToast(!toast);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Ślub Kruszczyńskich</h1>
            <p>
              Będzie ślub!
            </p>
            <p>
              <Button onClick={handleClick} variant="primary">IDE</Button>
              <Button variant="primary">Bo ide</Button>
            </p>
            {toast && (
            <Toast>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
            )}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
