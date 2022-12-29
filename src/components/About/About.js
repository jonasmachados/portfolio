import Quiz from "../Quiz/Quiz";
import './About.css';
import Profile from "../Profile/Profile";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div><Profile /></div>
      <div><Quiz /></div>
    </div>
  );
};

export default About;
