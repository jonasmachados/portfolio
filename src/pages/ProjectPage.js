import { useParams } from "react-router-dom";
import ProjectsData from "../data/ProjectsData.js";
import { IoOpenOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import NotFoundPage from "./NotFoundPage.js";
import "../styles/project-page.css";
import "../styles/page.css";

const ProjectPage = () => {
  const { id } = useParams();

  const project = ProjectsData.find((project) => project.id === Number(id));

  if (!project) {
    console.log("No project found with the provided id");
    return <NotFoundPage message="No project found with the provided id" />;
  }

  const {
    title,
    p_card1,
    p_card2,
    p_card3,
    imgUrl,
    linkSite,
    linkGit,
    description,
  } = project;

  const descriptionParagraphs = description.split("\n");

  return (
    <div className="container-project-page">
      <h1>{title}</h1>

      <img src={imgUrl} alt="img-project" />

      <div className="container-cards">
        <h2 className="card-item">{p_card1}</h2>
        <h2 className="card-item">{p_card2}</h2>
        <h2 className="card-item">{p_card3}</h2>
      </div>

      {linkSite && (
        <a href={linkSite}>
          <p>
            Open Website <IoOpenOutline/>
          </p>
        </a>
      )}

      <div className="description">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>

      {linkSite && (
        <a href={linkSite}>
          <p>
            {" "}
            Open Website <IoOpenOutline/>
          </p>
        </a>
      )}

      <a href={linkGit}>
        <p>
          Open GitHub <IoLogoGithub/>
        </p>
      </a>
    </div>
  );
  
};

export default ProjectPage;
