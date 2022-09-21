import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.png";
import navIcon2 from  "../../assets/img/iconGithub.png";
import navIcon3 from "../../assets/img/nav-icon3.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
    
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/jonasmachado01/" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/jonasmachados/" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/jonas-machados/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
