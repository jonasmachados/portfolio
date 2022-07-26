/* eslint-disable */
import React, { useState, useRef } from "react";
import request from "../Utils/request";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import iconPhone from "../../assets/img/phone.png";
import iconMail from "../../assets/img/email.png";
import iconLocal from "../../assets/img/maps.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [ownerRef, setOwnerRef] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const emailTo = "jonasmachado.ti@gmail.com";

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refSubject = useRef(null);
  const refMessage = useRef(null);
  
  const save = (e) => {
    e.preventDefault();

    const users = { ownerRef, emailFrom, emailTo, subject, text };
    
    request
      .createUser(users)
      .then((response) => {
        console.log(response.data);

        toast.success('Message sent successfully!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        //window.location.reload(false);

        refName.current.value = '';
        refEmail.current.value = '';
        refSubject.current.value = '';
        refMessage.current.value = '';
      })
      .catch((error) => {
        console.log(JSON.stringify(error));

        toast.error('Error: Message was not sent!!!', {
          position: "top-right",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  (function () {
    document.addEventListener("keyup", function (event) {
      if (event.target.matches(".count-chars")) {
        // get input value and length
        const value = event.target.value;
        const valueLength = event.target.value.length;
        // get data value
        const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
        const remainingChars = 0 + valueLength;
        if (valueLength > maxChars) {
          // limit chars to maxChars
          event.target.value = value.substr(0, maxChars);
          return;  //end function execution
        }
        event.target.nextElementSibling.innerHTML = remainingChars + "/140";
      }
    })
  })();

  return (
    <section className="container-contact" id="contact">
      <Container>
        <Row className="rows">
          <Col className="col-contact">
            <Row>
              <h2>Contact</h2>
              <p>Contact me by filling up this form</p>
              <div className="contact-links">
                <a href="#">
                  <img src={iconPhone} alt="Phone" />
                  +55(35)99128326
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
          </Col>
          <Col>
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Your Name *</label>
                <input
                  ref={refName}
                  type="text"
                  placeholder="Your Name"
                  name="ownerRef"
                  className="form-control"
                  value={ownerRef}
                  onChange={(e) => setOwnerRef(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Your Email *</label>
                <input
                  ref={refEmail}
                  type="text"
                  placeholder="Your Email"
                  name="emailFrom"
                  className="form-control"
                  value={emailFrom}
                  onChange={(e) => setEmailFrom(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Subject *</label>
                <input
                  ref={refSubject}
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Message *</label>
                <textarea
                  ref={refMessage}
                  maxLength="140"
                  data-max-chars="140"
                  type="text"
                  placeholder="Type something here.."
                  name="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="form-message count-chars "></textarea>
                <div className="input-msg text-red"></div>
              </div>

              <button className="buttons" onClick={(e) => save(e)}>
                Send Message{" "}
              </button>
              <ToastContainer />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
