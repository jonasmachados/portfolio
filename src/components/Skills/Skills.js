import React, { useState } from "react";
import "./styles.css";
import SvgBrain from "../SVG/SvgBrain";
import { motion } from 'framer-motion';
import SkillsData from "../../data/SkillsData.js";
import SkillCard from "./SkillCard.js";

const containerVariants = {
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

const Skills = () => {

  const [listAllSkills] = useState(SkillsData);

  return (
    <div className="container-skill" id="skills">
      <h1>What about the Skills?</h1>
      <p>These are some of my skills and tools that i have knowledge of.</p>
      <SvgBrain />
      <motion.div
        className="box-skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit">
        {listAllSkills.map((skill, index) => (
          <SkillCard key={index}
            skill={skill} />
        ))}
      </motion.div >
    </div >
  );
};

export default Skills;
