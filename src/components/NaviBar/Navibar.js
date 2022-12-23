import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillInfoCircle, AiFillProject, AiFillContacts } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import "./Nav.css";
import '../../App.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/#home"><AiFillHome/> Home</a>
        </li>
        <li className="nav-item">
          <a href="/#about"><AiFillInfoCircle/> About</a>
        </li>
        <li className="nav-item">
          <a href="/#skills"><GiSkills/> Skills</a>
        </li>
        <li className="nav-item">
          <a href="/#project"><AiFillProject/> Projects</a>
        </li>
        <li className="nav-item">
          <a href="/#contact"><AiFillContacts/> Contact</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Navbar;