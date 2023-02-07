import logo from "../../assets/img/logo.png";
import "./Footer.css";
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="img-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="social-media">
        <div className="social-icon">
          <a href="https://github.com/jonasmachados">
            <i><AiFillGithub /></i>
          </a>
          <a href="https://www.linkedin.com/in/jonas-machados/">
            <i><FaLinkedinIn /></i>
          </a>
          <a href="https://www.instagram.com/jonasmachado01/">
            <i> <AiFillInstagram /></i>
          </a>
        </div>
        <p className="p-social-icon">Copyright 2023. All Rights Reserved</p>
      </div>


    </div>
  );
};

export default Footer;
