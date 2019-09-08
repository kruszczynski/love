import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Nav
        fill
        activeKey="home"
      >
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="home">
            Wesele
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/yay" eventKey="yay">
            Yay
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Navigation;
