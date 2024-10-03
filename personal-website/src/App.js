import React from 'react';
import './App.css';

import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (


    <div className="app-container">
      <Sidebar />
      <div className="desktop-background">

        <div className="desktop-window">
          <section id="home" className="window-section home-section">
            <div className="home-container">
              <div className="home-image">
                <img src="/images/my-photo.jpg" alt="Your Photo" />
              </div>
              <div className="home-text">
                <h2>Kathy Li</h2>
                <p>
                  Hi! My name is Kathy, and I’m currently a sophomore majoring in
                  Computer Science at Brown University. I’m passionate about AI policy
                  and ethical technology, and I’m currently working on several tech-related
                  projects. In my free time, I enjoy playing video games and drawing.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="window-section">
            <h2>Projects</h2>
            <div className="project-card">
              <img src="/images/project-image.png" alt="Project" />
              <p>Project Name</p>
              <p>Description of the project...</p>
            </div>
          </section>

          <section id="experience" className="window-section">
            <h2>Experience</h2>
            <p>This is the experience section...</p>
          </section>

          <section id="about" className="window-section">
            <h2>About Me</h2>
            <p>This is the about me section...</p>
          </section>

          <section id="education" className="window-section">
            <h2>Education</h2>
            <p>This is the education section...</p>
          </section>
        </div>
      </div>
      <Footer /> {/* Footer is now placed outside the desktop window */}
    </div>
  );
}

export default App;
