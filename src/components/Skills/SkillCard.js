import "./styles.css";

const SkillCard = ({ skill }) => {

    return (
        <div className="skill-card">
            <h2>{skill.skillName}</h2>
            <ul>
                {skill.listTechnologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;