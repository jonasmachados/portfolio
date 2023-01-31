import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillInfoCircle, AiFillProject, AiFillContacts } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import "./Nav.css";

import { motion } from 'framer-motion';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <motion.div className="hamburger" onClick={handleClick}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </motion.div>

      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/#home"><AiFillHome /> Home</a>
          </li>
          <li className="nav-item">
            <a href="/#about"><AiFillInfoCircle /> About</a>
          </li>
          <li className="nav-item">
            <a href="/#skills"><GiSkills /> Skills</a>
          </li>
          <li className="nav-item">
            <a href="/#project"><AiFillProject /> Projects</a>
          </li>
          <li className="nav-item">
            <a href="/#contact"><AiFillContacts /> Contact</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;