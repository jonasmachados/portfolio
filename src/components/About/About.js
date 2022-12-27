import Quiz from "../Quiz/Quiz";
import { Col, Container, Row } from "react-bootstrap";
import './About.css';
import Profile from "../Profile/Profile";

const About = () => {
  return (
    <div className="container-about">
      <div><Profile /></div>
      <div><Quiz /></div>
    </div>
  );
};

export default About;
