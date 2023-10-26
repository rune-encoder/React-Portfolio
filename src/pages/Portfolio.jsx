import "../styles/Portfolio.css";
import portfolioContent from "../content/portfolioContent.js";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const { title, projects } = portfolioContent;

  return (
    <div className="proj-container">
      <h3>{title}</h3>
      <div className="proj-group">
        {projects.map((project) => (
          <div key={project.id} className="proj-item">
            <img src={project.imageUrl} alt={project.title} />
            <div className="proj-link-group">
              <a href={project.deployedLink} target="_blank">
                {project.title}
              </a>
              <a href={project.githubRepo} target="_blank">
                <FaGithub className="icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
