import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './icons.css';

const icon_list = [
  { name: 'About Me', link: '#about' },
  { name: 'Education', link: '#education' },
  { name: 'Projects', link: '#projects' },
  { name: 'Resume', link: '#resume' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' },
];

const Icons = () => {
  return (
    <Container className="icon-section">
      <Row>
        {icon_list.map((icon, index) => (
          <Col key={index} xs={12} sm={4} md={2} className="icon-container">
            <a href={icon.link} className="icon-link">
              <div className="icon-box">
                <img src={`/images/${icon.name.toLowerCase().replace(' ', '_')}.png`} alt={icon.name} />
                <p>{icon.name}</p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Icons;
