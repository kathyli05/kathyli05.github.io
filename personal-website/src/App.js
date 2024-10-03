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
          <section id="home" className="window-section">
            <h2>Home</h2>
            <p>Welcome to my website!</p>
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
