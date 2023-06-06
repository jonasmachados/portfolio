import "./styles.css"
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import DataAboutMe from "../../data/DataAboutMe";

const FaqAboutMe = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [allDatas] = useState(DataAboutMe);

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
      {allDatas.map((item, index) => (
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

export default FaqAboutMe;