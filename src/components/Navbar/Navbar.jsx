import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Container, Row, Col } from "reactstrap";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">SAJAS </div>
        <Toggle />
      </div>
      {/* right */}
      <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                         
                <span className="header__top__help">
                  <a class="ri-phone-fill" href='tel: +94 774116702'>Hotline: +94 774116702</a> 
                </span>
                 
                <span className="header__top__help">
                <a class="ri-mail-line" href='mailto: sajazeema@outlook.com'>Email: sajazeema@outlook.com</a> 
                </span>
              </div>
            </Col>
            </Row>
        </Container>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
