import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© 2024 &#9825; Kathy Li </p>
        <p> |   </p>
        <div className="footer-icons">
          <a href="mailto:kathyli.2305@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/kathyli05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kathymli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>);
};

export default Footer;
