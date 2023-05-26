import React, { useState } from "react";
import ProjectCard from "./ProjectCard"
import projectsData from "../../data/projectsData";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {

    const buttonVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 4.1 }
        },
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px var(--primary-color)",
            boxShadow: "0px 0px 8px var(--primary-color)",
            transition: {
                duration: 0.3,
                repeatType: "mirror",
                repeat: Infinity
            }
        }
    }

    const [visibleProjects, setVisibleProjects] = useState(4);
    const [allProjects] = useState(projectsData);

    const loadMoreProjects = () => {
        setVisibleProjects(visibleProjects + 4);
    };

    const loadLessProjects = () => {
        setVisibleProjects(visibleProjects - 4);
    };

    return (
        <div id="project">
            <h1 className="h1">Projects I Built!</h1>
            <p>
                Here are some of the projects i have built{" "}
                <span style={{ backgroundColor: "var(--primary-color)" }}>
                    :)
                </span>{" "}
            </p>
            <div className="container-projects">
                {allProjects.slice(0, visibleProjects).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="button-container-project">
                {visibleProjects < allProjects.length && (
                    <motion.button
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="load-button" onClick={loadMoreProjects}>
                        <FaChevronDown /> Carregar Mais
                    </motion.button>
                )}
                {visibleProjects > 4 && (
                    <motion.button
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="load-button"
                        onClick={loadLessProjects}>
                        <FaChevronUp /> Carregar Menos
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default Projects;
