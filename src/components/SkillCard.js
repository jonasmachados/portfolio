import "../styles//skills-card.css";

const SkillCard = ({ skill }) => {

    return (
        <div className="skill-card-container">

            <h2>{skill.skillName}</h2>

            <ul>
                {skill.listTechnologies.map((technology) => (
                    <li key={technology}>
                        <p className="p-icon">{technology.icon}</p>

                        <p className="p-name">{technology.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;