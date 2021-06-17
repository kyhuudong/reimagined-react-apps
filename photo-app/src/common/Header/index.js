import React from 'react';
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./header.scss";

const Header = () => (
  <header className="header">
    <Container>
      <Row className="justify-content-between">
        <Col xs="auto">
          <a
            className="header__link header__title"
            href="/photos"
            rel="noopener noreferrer"
          >
            Dong Dep Trai
          </a>
        </Col>
        <Col xs="auto">
          <NavLink
            className="header__link"
            to="/sign-in"
            activeClassName="header_link--active"
          >
            Login
          </NavLink>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
