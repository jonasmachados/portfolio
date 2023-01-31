import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Quiz.css"
import { motion } from 'framer-motion';
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

const Quiz = () => {
  const Data = [
    {
      question: 'Who am I ?',
      answer: 'My name is Jonas Machado, i am 32 years old and born in Brazil - MG, currently i am looking for new job opportunities as a developer.'
    },
    {
      question: 'What I do ?',
      answer: 'I am interested in Web development, i develop web site using in the back-end Java and fron-tend React. '
    },
    {
      question: 'What is my educational background ?',
      answer: ' I have a degree in Information Systems from Universitas. '
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "var(--primary-color)", size: "35px" }}>
      <motion.div className="accordionSection"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit">
        <div className="box">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <div className="wrap" onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="dropdown">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </motion.div>
    </IconContext.Provider>
  );
};

export default Quiz;
