import Quiz from "../Quiz/Quiz";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import profile from "./../../assets/img/profile.png";

const About = () => {
  return (
    <section className="About" id="about">
      <Container>
        <Row>
          <Col>
            <h1>About Me!</h1>
            <img src={profile} alt="Profile img" />
          </Col>
          <Col>
            <Quiz />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
