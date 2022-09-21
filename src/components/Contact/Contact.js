import React, { useState } from "react";
import request from "../Utils/request";
import "./Contact.css";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.png";
import navIcon3 from "../../assets/img/nav-icon3.png";
import iconGithub from "../../assets/img/iconGithub.png";
import iconPhone from "../../assets/img/phone.png";
import iconMail from "../../assets/img/email.png";
import iconLocal from "../../assets/img/maps.png";

const Contact = () => {
  const [ownerRef, setOwnerRef] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const emailTo = "jonasmachado.ti@gmail.com";

  const save = (e) => {
    e.preventDefault();

    const users = { ownerRef, emailFrom, emailTo, subject, text };

    request
      .createUser(users)
      .then((response) => {
        console.log(response.data);

        window.location.href = "/sending-email";
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  return (
    <section className="container-contact" id="contact">
      <Container>
        <br></br>
        <Row className="rows">
          <Col className="col-contact">
            <Row>
              <h2>Contact</h2>
              <p>Contact me by filling up this form</p>
              <div className="contact-links">
                <a href="#">
                  <img src={iconPhone} alt="Phone" />
                  +55-(35)99128326
                </a>
                <a href="#">
                  <img src={iconMail} alt="Email" />
                  jonasmachado.ti@gmail.com
                </a>
                <a href="#">
                  <img src={iconLocal} alt="Local" />
                  MG- Brazil
                </a>
              </div>
            </Row>
            <Row>
              <div className="social-icon">
                <a href="https://www.instagram.com/jonasmachado01/" target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/jonasmachados/" target="_blank">
                  <img src={iconGithub} alt="Icon" />
                </a>
                <a href="https://www.linkedin.com/in/jonas-machados/" target="_blank">
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
            </Row>
          </Col>
          <Col>
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Your Name *</label>
                <input
                  type="text"
                  placeholder=""
                  name="ownerRef"
                  className="form-control"
                  value={ownerRef}
                  onChange={(e) => setOwnerRef(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Your Email *</label>
                <input
                  type="text"
                  placeholder=""
                  name="emailFrom"
                  className="form-control"
                  value={emailFrom}
                  onChange={(e) => setEmailFrom(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  placeholder=""
                  name="subject"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Message *</label>
                <br></br>
                <input
                  type="text"
                  placeholder=""
                  name="text"
                  className="form-message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></input>
              </div>

              <button className="buttons" onClick={(e) => save(e)}>
                Send Message{" "}
              </button>
            </form>
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
    </section>
  );
};

export default Contact;
