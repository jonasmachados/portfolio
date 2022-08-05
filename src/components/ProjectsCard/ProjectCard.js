import { Col } from "react-bootstrap";
import "../Projects/Projects.css";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    /*
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    */
    <div class="container-project">
      <div class="middle">
        <div class="text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <img src={imgUrl} alt="Avatar" class="image" />
    </div>
  );
};

export default ProjectCard;
