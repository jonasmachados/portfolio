import React from "react";
import "../styles/project-card.css";
import { motion } from "framer-motion";
import { IoMdOpen } from "react-icons/io";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
  hover: {
    opacity: 0.8,
    cursor: "pointer",
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const ProjectCard = ({ project }) => {
  const openProjectPage = () => {
    window.location.href = `/project/${project.id}`;
  };

  return (
    <motion.div
      className="project-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="exit"
      onClick={openProjectPage}
    >
      <h3>{project.title}</h3>

      <div className="project-card-technologies">
        <p className="p-technologies">
          {project.p_card1} | {project.p_card2} | {project.p_card3}
        </p>
      </div>

      <img src={project.imgUrl} alt={`Screenshot of ${project.title}`} />

      <p className="p-subtitle">{project.subtitle}</p>

      <div className="open-project">
        <p className="p-open-project">Open project </p>
        <IoMdOpen className="icon-open-project" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
