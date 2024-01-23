import logo from "../assets/img/logo.png";
import "../styles/footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>EXPLORE</h2>

        <a href="/#">Homepage</a>

        <a href="/#about">About</a>

        <a href="/#skills">Skills</a>

        <a href="/#project">Projects</a>

        <a href="/contact">Contact</a>
      </div>

      <div className="footer-content">
        <h2>INFORMAÇOES DE CONTATO</h2>

        <p>
          {" "}
          <b> Whatsapp:</b> (35) 99912-8326
        </p>

        <p>
          {" "}
          <b>Eemail: </b>jonasmachado.ti@gmail.com
        </p>

        <div className="footer-social-icon">
          <a href="https://github.com/jonasmachados">
            <i>
              <AiFillGithub />
            </i>
          </a>

          <a href="https://www.instagram.com/jonasmachado01/">
            <i>
              {" "}
              <AiFillInstagram />
            </i>
          </a>

          <a href="https://www.linkedin.com/in/jonas-machados/">
            <i>
              <FaLinkedinIn />
            </i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />

        <h2>&copy; 2023 Jonas Machado. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
