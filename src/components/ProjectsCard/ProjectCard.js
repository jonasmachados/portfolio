import "./ProjectsCard.css";
import navIcon1 from "../../assets/img/iconGithub.png";
import navIcon2 from "../../assets/img/iconsLink.png";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 }
  },
  hover: {
    opacity: 0.7,
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const ProjectCard = ({
  title,
  description,
  p_card1,
  p_card2,
  p_card3,
  imgUrl,
  linkGit,
  linkSite,
}) => {
  return (
    <motion.div className="container-project"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="exit">
      <img src={imgUrl} alt="Avatar" className="image" />
      <div className="middle">
        <h4>{title}</h4>
        
        <div className="icons">
          <a href={linkGit}>
            <img src={navIcon1} alt="Icon" />
          </a>
          <a href={linkSite}>
            <img src={navIcon2} alt="Icon" />
          </a>
        </div>

        <div className="card-skill">
          <h5>{p_card1}</h5>ㅤ
          <h5>{p_card2}</h5>ㅤ
          <h5>{p_card3}</h5>ㅤ
        </div>
        <span>{description}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
