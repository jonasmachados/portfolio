import "./Quiz.css"
import { motion } from 'framer-motion';
import Faq from "react-faq-component";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const data = {
  rows: [
    {
      title: <p className="p_title">Who am I ?</p>,
      content: <p className="p_content">My name is Jonas Machado, i am 32 years old and born in Brazil - MG, currently i am looking for new job opportunities as a developer.</p>,
    },
    {
      title: <p className="p_title">What I do ? </p>,
      content:
        <p className="p_content">I am interested in Web development, i develop web site using in the back-end Java and fron-tend React.</p>,
    },
    {
      title: <p className="p_title">What is my educational background ?</p>,
      content: <p className="p_content">I have a degree in Information Systems from Universitas.</p>,
    },
  ],
};

const styles = {
  titleTextColor: 'blue',
  bgColor: 'var(--primary-color)',
  arrowColor: "#fff",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const Quiz = () => {

  return (
    <motion.div className="container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit">
      <Faq
        data={data}
        styles={styles}
        config={config}
      />
    </motion.div>

  );
}

export default Quiz;
