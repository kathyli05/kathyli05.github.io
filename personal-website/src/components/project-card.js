import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './project.css';

const ProjectCard = ({ title, description, image, githubLink, externalLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={`${title} project`} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> 
          </a>
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
