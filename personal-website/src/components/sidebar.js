import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#home" className="folder">
        <img src="/images/home.png" alt="Home" />
        <p>Home</p>
      </a>

      <a href="#projects" className="folder">
        <img src="/images/projects.png" alt="Projects" />
        <p>Projects</p>
      </a>

      <a href="#experience" className="folder">
        <img src="/images/experience.png" alt="Experience" />
        <p>Work Experience</p>
      </a>

      <a href="#about" className="folder">
        <img src="/images/about.png" alt="About" />
        <p>About Me</p>
      </a>

      <a href="#education" className="folder">
        <img src="/images/education.png" alt="Education" />
        <p>Education</p>
      </a>

      <a href="#resume" className="folder">
        <img src="/images/resume.png" alt="Resume" />
        <p>Resume</p>
      </a>
    </div>
  );
};

export default Sidebar;
