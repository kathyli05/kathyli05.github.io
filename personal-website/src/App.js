
import React from 'react';
import './App.css';
import { FaTimes } from 'react-icons/fa';

import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (


    <div className="app-container">
      <Sidebar />
      <div className="desktop-background">

        <div className="desktop-window">
          <div className="desktop-tab-bar">
            <div className="tab-bar-content">
              <img src="/images/star.png" alt="Star Icon" className="tab-bar-icon" />
              <h2>Kathy's site</h2>
            </div>
            <button className="tab-bar-close">
              <FaTimes></FaTimes>
            </button>
          </div>

          <section id="home" className="window-section home-section">
            <div className="section-header">
              <div className="header-line">
                <h2>Home</h2>
                <hr />
              </div>
              <div className="content">
                <div className="home-container">
                  <div className="home-image">
                    <img src="/images/my-photo.jpg" alt="Your Photo" />
                  </div>
                  <div className="home-text">
                    <h3>Kathy Li</h3>
                    <p>
                      Hi! My name is Kathy, and I’m currently a sophomore majoring in
                      Computer Science at Brown University. I’m passionate about AI policy
                      and ethical technology, and I’m currently working on several tech-related
                      projects. In my free time, I enjoy playing video games and drawing.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>


          <section id="projects" className="window-section">
            <div className="section-header">
              <div className="header-line">
                <h2>Projects</h2>
                <hr />
              </div>
              <div className="content">
              </div>
            </div>
          </section>


          <section id="experience" className="window-section">
            <div className="section-header">
              <div className="header-line">
                <h2>Experience</h2>
                <hr />
              </div>
              <div className="content">
              </div>
            </div>
          </section>

          <section id="about" className="window-section">
            <div className="section-header">
              <div className="header-line">
                <h2>About</h2>
                <hr />
              </div>
              <div className="content">
              </div>
            </div>
          </section>

          <section id="education" className="window-section">
            <div className="section-header">
              <div className="header-line">
                <h2>Education</h2>
                <hr />
              </div>
              <div className="content">
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer /> {/* Footer is now placed outside the desktop window */}
    </div>
  );
}

export default App;
