import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard2 from "../ProjectsCard/ProjectCard2";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "DS Meta",
      description:
        "This App show a report of all sales contents id of sale, the data, name of seller and total value of sale. Every sale has a button 'Notify', when clicking on the button, the registered cell phone receives an SMS with information about the sale.",
      p_card1: "SpringBoot",
      p_card2: "TypeScript",
      p_card3: "H2 Databse",
      imgUrl: projImg1,
      linkGit: "https://github.com/jonasmachados/memory-game-naruto",
      linkSite: "",
    },
    {
      title: "DS Movie",
      description:
        "This App is a film catalog that contain the film's name, the image and the evaluation that the film has, every movie has a button to evaluate where the user need to insert the email and your assessment.",
      p_card1: "SpringBoot",
      p_card2: "TypeScript",
      p_card3: "PostgreSQL",
      imgUrl: projImg2,
      linkGit: "https://github.com/jonasmachados/dsmovie",
      linkSite: "https://jonasms-dsmovie.netlify.app/",
    },
    {
      title: "Crud Employee",
      description:
        "Landing Page who has a CRUD of employee, this app registers a new employee and shows a list of all employees, being able to update or delete the data      ",
      p_card1: "SpringBoot",
      p_card2: "React.js",
      p_card3: "MySQL",
      imgUrl: projImg3,
      linkGit: "https://github.com/jonasmachados/crud-employee",
      linkSite: "",
    },
    {
      title: "Memory Game Naruto",
      description:
        "Project front-end for the Bootcamp TQI Fullstack Developer - DIO, developed a game memory of naruto anime using javascript and HTML + CSS",
      p_card1: "HTML",
      p_card2: "CSS",
      p_card3: "JavaScript",
      imgUrl: projImg4,
      linkGit: "https://github.com/jonasmachados/memory-game-naruto",
      linkSite: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      p_card1: "SpringBoot",
      p_card2: "Thymeleaf",
      p_card3: "PostgreSQL",
      imgUrl: projImg5,
      linkGit: "",
      linkSite: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      p_card1: "SpringBoot",
      p_card2: "Thymeleaf",
      p_card3: "PostgreSQL",
      imgUrl: projImg6,
      linkGit: "",
      linkSite: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects I Built!</h2>
            <p>
              Here are some of the projects i have built{" "}
              <span style={{ backgroundColor: "var(--primary-color)" }}>
                :)
              </span>{" "}
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Page One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Page Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Page Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard2 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p>Lorem ipsum</p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
