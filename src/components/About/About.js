import FaqAboutMe from "../Faq/FaqAboutMe";
import './About.css';
import Profile from "../Profile/Profile";
import { motion } from 'framer-motion';

const containerAbout = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const About = () => {
  return (
    <motion.div className="container-about" id="about"
      variants={containerAbout}
      initial="hidden"
      whileInView="visible"
      exit="exit"
    >
      <div><Profile /></div>
      <div><FaqAboutMe /></div>
    </motion.div>
  );
};

export default About;
