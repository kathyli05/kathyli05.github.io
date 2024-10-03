
import React from 'react';
import './App.css';
import { FaTimes } from 'react-icons/fa';

import Sidebar from './components/sidebar';
import Footer from './components/footer';
import ProjectCard from './components/project-card';
import ExperienceSection from './components/experiences';
import EducationCard from './components/education-card';
import AboutMe from './components/about';

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
                    <img src="/images/placeholder.jpeg" alt="Your Photo" />
                  </div>
                  <div className="home-text">
                    <h3>Welcome to my personal site! &#127776;</h3>
                    <p>
                      Hi! I’m Kathy Li, a sophomore studying Computer Science and Science, Technology, & Society at Brown University. I’m interested in responsible tech, product management, front-end development, and the gaming industry.
                      If I'm not in a library, you can probably find me playing video games, working on one of my current projects, or spending money on some type of caffeinated drink. Please reach out or connect with me anytime - I love chatting with new people!
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
                <div className="subheader">
                  <h3>&#128269;
                    Research Projects</h3>
                  <div className="subheader-line"></div>
                </div>

                <ProjectCard
                  title="Impact Afghanistan"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />

                <ProjectCard
                  title="NPH Diagnosis!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />

                <div className="subheader">
                  <h3>&#128269;
                    Personal Projects</h3>
                  <div className="subheader-line"></div>
                </div>

                <ProjectCard
                  title="This website!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />

                <div className="subheader">
                  <h3>&#128269;
                    Academic Projects</h3>
                  <div className="subheader-line"></div>
                </div>

                <ProjectCard
                  title="Server and CSV!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />

                <ProjectCard
                  title="Decision Tree!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />

                <ProjectCard
                  title="Connect 4!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />


                <div className="subheader">
                  <h3>&#128269;
                    Other Projects</h3>
                  <div className="subheader-line"></div>
                </div>

                <ProjectCard
                  title="Scouting app systems!"
                  description="Coming soon!"
                  image="/images/placeholderproject.jpg"
                  githubLink="https://github.com/yourproject"
                  externalLink="https://example.com/project"
                />


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
                <ExperienceSection />
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
                <AboutMe></AboutMe>
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
                <EducationCard
                  school=""
                  logo="/images/brownlogo.png" // path to your high school logo
                  degree="Sc.B. Computer Science, A.B. Science, Technology, and Society"
                  date="Sep 2023 - May 2027"
                  gpa="4.0"
                  activities={[
                    'Women in CS (Academic Events Chair)',
                    'AI Robotics Ethics Society (Public Relations Chair)',
                    'Lion Dance',
                    'Brown Opinion Project',
                    'Brown China Summit',
                    'Meiklejohn Peer Advisor'
                  ]}
                />
                <EducationCard
                  school=""
                  logo="/images/dhslogo.png" // path to your high school logo
                  degree="High School Diploma"
                  date="Aug 2019 - Jun 2023"
                  gpa="4.61/4.0"
                  activities={[
                    'FIRST Robotics Competition Team 1678',
                    'Site Council (Vice President)',
                    'Women in STEM Club (Vice President)',
                    'Junior State of America (President)',
                    'ASB Clubs Commissioner'
                  ]}
                  testscores={[
                    'SAT: 1600',
                    'PSAT: 1520'
                  ]}
                />

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
