import "./FaqComponent.css"
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const data = [
  {
    title: 'Who am I?',
    content: 'My name is Jonas Machado. I am 32 years old and born in Itajúba - MG. Currently, I am looking for new job opportunities as a developer.',
  },
  {
    title: 'What do I do?',
    content: 'I am interested in web development. I develop websites using Java for the back-end and React for the front-end.',
  },
  {
    title: 'What is my educational background?',
    content: 'I have a degree in Information Systems from Fepi - Universitas.',
  },
];

const FaqComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faq-container"
    >
      {data.map((item, index) => (
        <div
          key={index} 
          className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
        >
          <p className="p_title">
            {item.title}
            <button
              className="expand-button"
              onClick={() => handleToggle(index)}
            >
              {expandedIndex === index ? (
                <AiFillCaretUp className="expand-icon" />
              ) : (
                <AiFillCaretDown className="expand-icon" />
              )}
            </button>
          </p>
          {expandedIndex === index && <p className="p_content">{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;