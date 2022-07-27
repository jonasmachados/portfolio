import "./Skills.css";
import codeThink from "./../../assets/img/skills.svg";

const listTitleStyle = {
  fontWeight: 900,
  color: "#6C63FF",
  marginBottom: "4px",
};

const backendSkills = (
  <ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Scala - Java - SQl</li>
    <li>Scala - SpringBoot - SQl</li>
  </ul>
);

const frontendSkills = (
  <ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>React.js - HTML - CSS</li>
  </ul>
);

const messagingSkills = (
  <ul>
    <li style={listTitleStyle}>MESSAGING</li>
    <li>ActiveMQ</li>
  </ul>
);

const dataScienceSkills = (
  <ul>
    <li style={listTitleStyle}>DATA SCIENCE SKILLS</li>
    <li>ELK Stack - Apache Spark</li>
  </ul>
);

const buildToolsSkills = (
  <ul>
    <li style={listTitleStyle}>BUILD TOOLS</li>
    <li>Maven - SBT</li>
  </ul>
);

const otherSkills = (
  <ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>Git - Docker - Jenkins - Json - XML</li>
  </ul>
);

const totalSkills = [
  backendSkills,
  frontendSkills,
  messagingSkills,
  dataScienceSkills,
  buildToolsSkills,
  otherSkills,
];

const Skills = () => {
  return (
    <div className="Skills" id="skills">
      <h1>What about the Skills?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="Container">
        <img src={codeThink} alt="CodeThinh img" />
        {totalSkills.map((Skills) => {
          return <div className="List">{Skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
