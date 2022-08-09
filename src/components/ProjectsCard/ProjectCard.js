import "./ProjectsCard.css";


const ProjectCard = ({ title, description, p_card1, p_card2, p_card3, imgUrl }) => {
  return (
    <div class="container-project">
      <div class="middle">
        <div class="text">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="card-skill">
           <h5>{p_card1}</h5>
           <h5>{p_card2}</h5>
           <h5>{p_card3}</h5>
          </div>
        </div>
      </div>
      <img src={imgUrl} alt="Avatar" class="image" />
    </div>
  );
};

export default ProjectCard;
