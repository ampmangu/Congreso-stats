import React from 'react';
import '../../styles/navbar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Gradient from './Gradient';
import LanguageSelect from './LanguageSelect';
import Searcher from './Searcher';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar id="my-nav" collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <div className="nav left">
            <Gradient id="logo_header" tagToRender={(<a href="/">Congreso Stats</a>)} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-bar">
              <Nav>
                <Gradient tagToRender={(
                  <Link className="sessions-link" to="/sessions">{t('sessions')}</Link>)}
                />
                <Gradient tagToRender={(
                  <Link className="groups-link" to="/groups">{t('groups')}</Link>)}
                />
                <Gradient id="languages" tagToRender={(<LanguageSelect />)} />
                <Gradient id="nav-searcher" tagToRender={(<Searcher />)} />
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
