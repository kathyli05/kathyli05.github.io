import React from 'react';
import './education.css';

const EducationCard = ({ school, logo, degree, date, activities, gpa, testscores }) => {
    return (
        <div className="education-card">
            <div className="education-card-left">
                <img src={logo} alt={`${school} Logo`} className="education-logo" />
                <h3>{school}</h3>
            </div>
            <div className="education-card-right">
                <h4>{degree}</h4>
                <p>{date}</p>
                {gpa && <p>&gt; GPA - {gpa}</p>}
                {activities && <p>Activities: {activities.join(', ')}</p>}
                {testscores && <p>Test Scores: {testscores.join(', ')}</p>}
            </div>
        </div>
    );
};

export default EducationCard;
