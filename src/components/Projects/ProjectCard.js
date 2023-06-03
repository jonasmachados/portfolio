import React from "react";
import "./Projects.css";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.2}
    },
    hover: {
        opacity: 0.8,
        cursor: "pointer"
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};

const ProjectCard = ({ project }) => {

    const openProjectPage = () => {
        window.location.href = `/project/${project.id}`;
    };

    return (
        <motion.div className="container-project-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            onClick={openProjectPage}>
            <img src={project.imgUrl} alt="img-project" />
            <div className="content-project-card">
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
