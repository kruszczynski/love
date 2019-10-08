import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <Container>
    <Navbar className="kruszcz-nav">
      <Nav
        fill
      >
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Wesele
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/rsvp">
            RSVP
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </Container>
);

export default Navigation;
