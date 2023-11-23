import logo from "../assets/img/logo.png";
import "../styles/footer.css";
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">

      <div>
        <h2>EXPLORE</h2>
        <p>
          <a href="/#">Homepage</a>
        </p>
        <p>
          <a href="/#about">About</a>
        </p>
        <p>
          <a href="/#skills">Skills</a>
        </p>
        <p>
          <a href="/#project">Projects</a>
        </p>
        <p>
          <a href="/contact">Contact</a>
        </p>
      </div>

      <div>
        <h2>INFORMAÇOES DE CONTATO</h2>
        <p> <b> Whatsapp:</b> (35) 99912-8326</p>
        <p> <b> email: </b>jonasmachado.ti@gmail.com</p>
        <div className="footer-social-icon">
          <a href="https://github.com/jonasmachados">
            <i><AiFillGithub /></i>
          </a>
          <a href="https://www.instagram.com/jonasmachado01/">
            <i> <AiFillInstagram /></i>
          </a>
          <a href="https://www.linkedin.com/in/jonas-machados/">
            <i><FaLinkedinIn /></i>
          </a>
        </div>
      </div>

      <div>
        <img
          src={logo}
          alt="Logo"
          className="footer-logo" />
        <h2>&copy; 2023 Jonas Machado. All rights reserved.</h2>
      </div>

    </div>
  );
};

export default Footer;
