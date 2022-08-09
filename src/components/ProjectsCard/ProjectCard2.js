import "./ProjectsCard2.css";
import { Row,Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/iconGithub.png";
import navIcon2 from "../../assets/img/iconsLink.png";

const ProjectCard2 = ({
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
    <div class="container-project">
      <img src={imgUrl} alt="Avatar" class="image" />
      <div class="middle">
        <div class="text">
          <Row>
          <Col size={12} sm={7}>
            <h4>{title}</h4>
          </Col>
          <Col size={12} sm={5}>
            <div className="icons">
              <a href={linkGit}>
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href={linkSite}>
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
          </Col>
          </Row>
          <div className="card-skill">
            <h5>{p_card1}</h5>
            <h5>{p_card2}</h5>
            <h5>{p_card3}</h5>
          </div>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
