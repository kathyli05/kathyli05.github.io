import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
    const [selectedFolder, setSelectedFolder] = useState('home'); // Default to 'home'

    const handleFolderClick = (folderName) => {
        setSelectedFolder(folderName);
    };

    return (
        <div className="sidebar">
            <a
                href="#home"
                className={`folder ${selectedFolder === 'home' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('home')}
            >
                <img src="/images/home.png" alt="Home" />
                <p>Home</p>
            </a>

            <a
                href="#projects"
                className={`folder ${selectedFolder === 'projects' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('projects')}
            >
                <img src="/images/projects.png" alt="Projects" />
                <p>Projects</p>
            </a>

            <a
                href="#experience"
                className={`folder ${selectedFolder === 'experience' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('experience')}
            >
                <img src="/images/experience.png" alt="Experience" />
                <p>Experience</p>
            </a>

            <a
                href="#about"
                className={`folder ${selectedFolder === 'about' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('about')}
            >
                <img src="/images/about.png" alt="About" />
                <p>About Me</p>
            </a>

            <a
                href="#education"
                className={`folder ${selectedFolder === 'education' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('education')}
            >
                <img src="/images/education.png" alt="Education" />
                <p>Education</p>
            </a>

            <a
                href="#resume"
                className={`folder ${selectedFolder === 'resume' ? 'selected' : ''}`}
                onClick={() => handleFolderClick('resume')}
            >
                <img src="/images/resume.png" alt="Resume" />
                <p>Resume</p>
            </a>
        </div>
    );
};

export default Sidebar;
