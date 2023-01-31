import "./Skills.css";
import codeThink from "./../../assets/img/skills.svg";
import SvgBrain from "../SVG/SvgBrain";

const listTitleStyle = {
  fontWeight: 900,
  color: "var(--primary-color)",
  marginBottom: "4px",
};

const backendSkills = (
  <ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Java - SpringBoot</li>

  </ul>
);

const frontendSkills = (
  <ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>HTML - CSS - Javascript</li>
    <li>React.js</li>
  </ul>
);

const AgileSkills = (
  <ul>
    <li style={listTitleStyle}>AGILE METHODOLOGY</li>
    <li>Scrum</li>
  </ul>
);

const dataBaseSkills = (
  <ul>
    <li style={listTitleStyle}>DATABASE</li>
    <li>H2 Database - MySQL</li>
    <li>PostgreSQL - MongoDB</li>
  </ul>
);

const deploySkills = (
  <ul>
    <li style={listTitleStyle}>DEPLOY</li>
    <li>Heroku - Netlify</li>
    <li>Railway</li>
  </ul>
);

const otherSkills = (
  <ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>Git - GitHub - Json - XML</li>
    <li>Postman - API Rest</li>
  </ul>
);

const totalSkills = [
  backendSkills,
  frontendSkills,
  dataBaseSkills,
  deploySkills,
  AgileSkills,
  otherSkills,
];

const Skills = () => {
  return (
    <div className="Skills" id="skills">
      <h1>What about the Skills?</h1>
      <p>These are some of my skills and tools that i have knowledge of.</p>
      <SvgBrain />
      <div className="Container">
        {totalSkills.map((Skills, index) => {
          return <div key={index} className="List">{Skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
