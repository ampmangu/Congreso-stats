import React from 'react';
import '../../styles/navbar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Gradient from './Gradient';

export default function Navigation() {
  return (
    <>
      <Navbar id="my-nav" collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <div className="nav left">
            <Gradient tagToRender={(<a href="/">Congreso Stats</a>)} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-bar">
              <Nav>
                <Gradient tagToRender={(<Link className="home-link" to="/">Home</Link>)} />
                <Gradient tagToRender={(<Link className="sessions-link" to="/sessions">Sessions</Link>)} />
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
