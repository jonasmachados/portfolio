import { useParams } from 'react-router-dom';
import ProjectsData from "../../data/ProjectsData";
import { IoOpenOutline } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';
import "./styles.css";

const ProjectPage = () => {
    const { id } = useParams();
    const filteredProjects = ProjectsData.filter((project) => project.id === Number(id));
    const project = filteredProjects[0];

    if (!project) {
        console.log('No project found with the provided id');
        return <div>Project not found</div>;
    }

    const { title, p_card1, p_card2, p_card3, imgUrl, linkSite, linkGit, description } = project;
    const descriptionParagraphs = description.split('\n');

    return (
        <div className="container-project-page">
            <h1>{title}</h1>
            <div className="container-cards">
                <h2>{p_card1}</h2>
                <h2>{p_card2}</h2>
                <h2>{p_card3}</h2>
            </div>
            <img src={imgUrl} alt="img-project" />
            {linkSite && (
                <a href={linkSite}>
                    Open Website <IoOpenOutline className="icon" />
                </a>
            )}
            <div className="description">
                {descriptionParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                ))}
            </div>
            {linkSite && (
                <a href={linkSite}>
                    Open Website <IoOpenOutline className="icon" />
                </a>
            )}
            <a href={linkGit}>
                Open GitHub <IoLogoGithub className="icon" />
            </a>
        </div>
    );
};

export default ProjectPage;