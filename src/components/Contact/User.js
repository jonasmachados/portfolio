/*

  axios
    .post("/user", {
      name: "Fred",
      email: "Fred@gmail.com",
      phone: "123",
      password: "123",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import request from "../Utils/request";

const User = () => {
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const save = (e) => {
    e.preventDefault();

    const users = { name, email, phone, password };

    request.createUser(users)
      .then((response) => {
        console.log(response.data);

        window.location.href = "/users";

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
            placeholder="Enter name"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="form-group mb-2">
          <label className="form-label"> email :</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-group mb-2">
          <label className="form-label"> phone :</label>
          <input
            type="text"
            placeholder="Enter email phone"
            name="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>

        <div className="form-group mb-2">
          <label className="form-label"> password :</label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default User;
