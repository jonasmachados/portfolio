import FaqComponent from "../Faq/FaqComponent";
import './About.css';
import Profile from "../Profile/Profile";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div><Profile /></div>
      <div><FaqComponent /></div>
    </div>
  );
};

export default About;
