import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectsCard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import projImg8 from "../../assets/img/project-img8.png";
import projImg9 from "../../assets/img/project-img9.png";
import projImg10 from "../../assets/img/project-img10.png";
import projImg11 from "../../assets/img/project-img11.png";

import "./Projects.css";

const Projects = () => {
  const page1 = [
    {
      title: "Bookstore Inventory Control System",
      description: "Full Stack Project, management system of a bookstore. This app performs the registration of the books and the stock control.",
      p_card1: "SpringBoot",
      p_card2: "React",
      p_card3: "PostgreSQL",
      imgUrl: projImg6,
      linkGit: "https://github.com/jonasmachados/tqi_evolution_fullstack_2022",
      linkSite: "https://bookstore-jonas.netlify.app",
    },
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
      title: "App Web Oficina Thymeleaf",
      description:
        "This App help the conductors the will have control of task related the maintenance that were made in your car, making possible inform all services that were made in the car like a oil change, battery, air and oil filters, changing tires, alignment and balancing among others.",
      p_card1: "SpringBoot",
      p_card2: "Thymeleaf",
      p_card3: "PostgreSQL",
      imgUrl: projImg5,
      linkGit: "https://github.com/jonasmachados/AppWebOficina-Thymeleaf",
      linkSite: "",
    },
  ];

  const page2 = [
    {
      title: "API Send Email",
      description:
        "This app sends a message to customers using the Spring Boot Starter Mail frameword, the fron-tend can do the form using method POST to consume the API.",
      p_card1: "SpringBoot",
      p_card2: "Rest Api",
      p_card3: "PostgreSQL",
      imgUrl: projImg7,
      linkGit: "",
      linkSite: "",
    },
    {
      title: "Workshop PostgreSQL",
      description: "This is a Project of Spring Boot and JPA/Hibernate of course Java COMPLETO Programação Orientada a Objetos of Dr. Nelio Alves, Course Udemy. Project Backend of a control of order. The Client make a order then is fulfil the order include the prodcut that was order by Client.",
      p_card1: "SpringBoot",
      p_card2: "Rest Api",
      p_card3: "PostgreSQL",
      imgUrl: projImg8,
      linkGit: "https://github.com/jonasmachados/workshop-postgreSQL",
      linkSite: "",
    },
    {
      title: "WorkShop MongoDB",
      description: "This project was developer in SprinBoot and MongoDB, in that project was created a object Post that have several comments, each user can make a new Post and a new comment.",
      p_card1: "SpringBoot",
      p_card2: "Rest Api",
      p_card3: "MongoDB",
      imgUrl: projImg9,
      linkGit: "https://github.com/jonasmachados/workshop-spring-boot-mongodb",
      linkSite: "",
    },
    {
      title: "Workshop Javafx",
      description: "This project is a desktop application, developed in Javafx, a CRUD of seller and deppartment.",
      p_card1: "Java",
      p_card2: "Javafx",
      p_card3: "MySQL",
      imgUrl: projImg10,
      linkGit: "https://github.com/jonasmachados/workshop-javafx-jdbc",
      linkSite: "https://github.com/jonasmachados/workshop-javafx-jdbc",
    },
    {
      title: "App BookStore Thymeleaf",
      description: "This App is a CRUD of books and category.",
      p_card1: "SpringBoot",
      p_card2: "Thymeleaf",
      p_card3: "PostgreSQL",
      imgUrl: projImg11,
      linkGit: "https://github.com/jonasmachados/AppBookStore-Spring-Thymeleaf",
      linkSite: "",
    },
  ];

  return (
    <div className="project" id="project">
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
              
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row style={{gap: 72, margin: 0 }}>
                    {page1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row style={{gap: 72, padding: 0 }}>
                    {page2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
