import Quiz from "../Quiz/Quiz";
import { Col, Container, Row } from "react-bootstrap";
import './About.css';
import Profile from "../Profile/Profile";

const About = () => {
  return (
    <section className="About" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <Profile />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Quiz />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
