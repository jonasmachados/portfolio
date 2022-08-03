import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Quiz.css"

const Quiz = () => {
  const Data  = [
    {
        question: 'Who am I ?',
        answer:'I am Jonas Machado.'
      },
      {
        question: 'What I do ?',
        answer: 'I am interested in Web development, Mobile app development, Machine Learning and Problem solving.'
      },
      {
        question: 'What is my educational background ?',
        answer: 'I Apollo-gize.'
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

  /* 
  toggle = () =>{

  }; */

 

  return (
    <IconContext.Provider value={{ color: "var(--primary-color)", size: "25px" }}>
      <div className="accordionSection">
        <div className="box">
          {Data.map((item, index) => {
            return (
              <>
                <div className="wrap" onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="dropdown">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Quiz;
