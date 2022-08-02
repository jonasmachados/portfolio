import React, { useState } from "react";
import request from "../Utils/request";

const Contact = () => {

  const [ownerRef, setOwnerRef] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  //const [emailTo, setEmailTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const save = (e) => {
    e.preventDefault();

    const emailTo = "jonasmachado.ti@gmail.com";
    const users = { ownerRef, emailFrom, emailTo, subject, text };

    request.createUser(users)
      .then((response) => {
        console.log(response.data);

        window.location.href = "/sending-email";

      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  return (
    <div>
    <form>
      <div className="form-group mb-2">
        <label className="form-label"> name :</label>
        <input
          type="text"
          placeholder="Enter ownerRef"
          name="ownerRef"
          className="form-control"
          value={ownerRef}
          onChange={(e) => setOwnerRef(e.target.value)}
        ></input>
      </div>

      <div className="form-group mb-2">
        <label className="form-label"> emailFrom :</label>
        <input
          type="text"
          placeholder="Enter emailFrom"
          name="emailFrom"
          className="form-control"
          value={emailFrom}
          onChange={(e) => setEmailFrom(e.target.value)}
        ></input>
      </div>

      <div className="form-group mb-2">
        <label className="form-label"> subject :</label>
        <input
          type="text"
          placeholder="Enter esubject"
          name="subject"
          className="form-control"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
      </div>

      <div className="form-group mb-2">
        <label className="form-label"> text :</label>
        <input
          type="text"
          placeholder="Enter text"
          name="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <button
        className="btn btn-success"
        onClick={(e) => save(e)}
      >
        Submit{" "}
      </button>
      
    </form>
  </div>
  );
};

export default Contact;
