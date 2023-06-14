import React, { useState, useRef } from "react";
import request from "../Utils/request";
import "./Contact.css";
import iconPhone from "../../assets/img/phone.png";
import iconMail from "../../assets/img/email.png";
import iconLocal from "../../assets/img/maps.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { validateContact } from "../../validations/validateContact";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Contact = () => {
  const [ownerRef, setOwnerRef] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const emailTo = "jonasmachado.ti@gmail.com";
  const [ownerRefError, setOwnerRefError] = useState({ ownerRef: "" });
  const [emailFromError, setEmailFromError] = useState({ emailFrom: "" });
  const [subjectError, setSubjectError] = useState("");
  const [textError, setTextError] = useState("");

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refSubject = useRef(null);
  const refMessage = useRef(null);

  const handleOwnerRefChange = (event) => {
    setOwnerRef(event.target.value);
    setOwnerRefError({ ...setOwnerRefError, ownerRef: "" });
  };

  const handleEmailFromChange = (event) => {
    setEmailFrom(event.target.value);
    setEmailFromError({ ...emailFromError, emailFrom: "" });
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    setSubjectError({ ...subjectError, subject: "" });
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setTextError({ ...textError, text: "" });
  };

  const save = async (e) => {
    e.preventDefault();

    const newUser = {
      ownerRef,
      emailFrom,
      emailTo,
      subject,
      text,
    };

    const validationResult = await validateContact(newUser);

    if (validationResult.isValid) {
      request
        .createUser(newUser)
        .then((response) => {
          console.log(response.data);

          toast.success('Message sent successfully!!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });

          refName.current.value = '';
          refEmail.current.value = '';
          refSubject.current.value = '';
          refMessage.current.value = '';
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          toast.error('Message was not sent!!!', {
            position: 'top-right',
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        });
    } else {
      setOwnerRefError({ ...ownerRefError, ownerRef: validationResult.errors });
      setEmailFromError({ ...emailFromError, emailFrom: validationResult.errors });
      setSubjectError({ ...subjectError, subject: validationResult.errors });
      setTextError({ ...textError, text: validationResult.errors });
    }
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
    <motion.div className="container-contact" id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
    >
      <div className="div-contact">
        <h1>Contact</h1>
        <p>Contact me by filling up this form</p>
        <div className="contact-links">
          <div>
            <img src={iconPhone} alt="Phone" />
            +55(35)99128326
          </div>
          <div>
            <img src={iconMail} alt="Email" />
            jonasmachado.ti@gmail.com
          </div>
          <div>
            <img src={iconLocal} alt="Local" />
            MG- Brazil
          </div>
        </div>
      </div>

      <div className="div-form">
        <form>
          <div>
            <label className="form-label"> Your Name *</label>
            <input
              ref={refName}
              type="text"
              placeholder="Your Name"
              name="ownerRef"
              className="form-control"
              value={ownerRef}
              onChange={handleOwnerRefChange}
            ></input>
          </div>
          {ownerRefError.ownerRef &&
            <p style={{ color: "red", fontSize: "20px", margin: "0" }}>
              {ownerRefError.ownerRef.ownerRef}
            </p>
          }

          <div>
            <label className="form-label"> Your Email *</label>
            <input
              ref={refEmail}
              type="text"
              placeholder="Your Email"
              name="emailFrom"
              className="form-control"
              value={emailFrom}
              onChange={handleEmailFromChange}
            ></input>
          </div>
          {emailFromError.emailFrom &&
            <p style={{ color: "red", fontSize: "20px", margin: "0" }}>
              {emailFromError.emailFrom.emailFrom}
            </p>
          }

          <div>
            <label className="form-label">Subject *</label>
            <input
              ref={refSubject}
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-control"
              value={subject}
              onChange={handleSubjectChange}
            ></input>
          </div>
          {subjectError.subject &&
            <p style={{ color: "red", fontSize: "20px", margin: "0" }}>
              {subjectError.subject.subject}
            </p>
          }

          <div>
            <label className="form-label"> Message *</label>
            <textarea
              ref={refMessage}
              maxLength="140"
              data-max-chars="140"
              type="text"
              placeholder="Type something here.."
              name="text"
              value={text}
              onChange={handleTextChange}
              className="form-message count-chars "></textarea>
            <div className="input-msg text-red"></div>
          </div>
          {textError.text &&
            <p style={{ color: "red", fontSize: "20px", margin: "0" }}>
              {textError.text.text}
            </p>
          }

          <button className="buttons" onClick={(e) => save(e)}>
            Send Message{" "}
          </button>
          <div>
            <ToastContainer style={{ marginTop: '70px' }} />
          </div>
        </form>
      </div >

    </motion.div >
  );
};

export default Contact;