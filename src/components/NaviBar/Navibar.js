import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div></div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Skills</a>
        </li>
        <li className="nav-item">
          <a href="/">Projects</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
