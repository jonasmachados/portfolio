import "./../styles/faq.css"
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Faq = ({ allDatas }) => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) =>
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="faq-container">
      {allDatas.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
        >

          <p className="p_title">
            {item.title}
            <button
              className="expand-button"
              onClick={() => handleToggle(index)}>
              {expandedIndex === index ?
                <IoMdClose className="expand-icon" /> :
                <FiPlus className="expand-icon" />}
            </button>
          </p>

          {expandedIndex === index &&
            <p className="p_content">
              {item.content}
            </p>
          }

        </div>
      ))}
    </div>
  );
};

export default Faq;