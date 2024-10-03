import React, { useState } from 'react';
import './experiences.css';

const experiences = [
    {
        id: 'impactafg',
        company: 'Impact Afghanistan',
        role: 'Software Developer',
        date: 'May 2024 - Present',
        description: [
            "Launched an online platform that facilitates the collection and dissemination of research on post-2021 Afghanistan",
            "Using Node.js, React, and HTML/CSS, engineered the front end of website, enabling streamlined searches and submissions for academics, students, and media",
            "Collaborated with teams from Brown University and the United Nations to integrate and host the platform",
            "Presented at the United Nations Summit of the Future Action Days in late September 2024"
        ],
    },

    {
        id: 'lab',
        company: 'Laboratory for Cognitive and Perceptual Learning',
        role: 'Student Researcher',
        date: 'Jan 2024 - May 2024',
        description: [
            'Conducted empirical research on cognitive and visual learning; directed study participants and assisted with logistics',
            'Learned efficient utilization of processing techniques and research tools such as R and Zotero',
            'Coded components of anti-saccade task; collaborated with researchers to integrate coding solutions into experiments'
        ],
    },
    {
        id: 'citrus',
        company: 'FIRST Robotics Competition Team 1678 Citrus Circuits',
        roles: [
            {
                role: 'Co-Captain',
                date: 'Jun 2022 - Jun 2024',
                description: [
                    'Led team to finish top 5 in the world out of 3200+ teams; drove team toward competitive, educational, and outreach goals',
                    'Supervised administration/management of 90+ team members among 8 cross-functional sub-teams and 11 outreach programs',
                    'Led weekly leadership and team meetings; organized parent and competition meetings',
                    'Implemented initiatives to increase female retention on team, organized 3 events that attracted 85% of female team members'
                ],
            },
            {
                role: 'Front-end App Developer',
                date: 'Aug 2019 - Jun 2023',
                description: [
                    'Contributed code to four different data collection and visualization applications',
                    'Mentored 20+ team members in UI creation, version control, and efficient software development methods.',
                    'Implemented innovative strategies for managing end-to-end system workflow, leading to the achievement of the highest end-to-end system success rate in team history and the general recognition of the system as the best within FRC',
                ],
            }
        ],
    },
    {
        id: 'dyr',
        company: 'Davis Youth Robotics',
        role: 'Program Lead, Mentor, Head Counselor, Volunteer',
        date: 'June 2019 - June 2023',
        description: [
            'As DYR League Lead (June 2021 – June 2022): publicized events to 5k+ students; supervised 29 teams with 150+ students; trained 57 student mentors and 30+ parent coaches; awarded $700 in scholarships; co-coordinated 3 statewide competitions with 500+ attendees',
            'As RoboCamps Head Counselor (June 2021 – June 2022): led and provided guidance to 12 counselors; led debriefs and managed camp logistics; communicated with parents; ensured 40+ campers were collaborating and learning',
            'As mentor and volunteer (July 2019 – June 2023): taught children from grades 4-8 principles of engineering and computer science through VEX IQ; received 2022 DYR Volunteer of the Year Award for contributions to DYR program',
            'As Girl Powered Events Lead (October 2020 – June 2021): coordinated, and executed 7 events for young girls in STEM with 100+ attendees total'
        ],
    },
    {
        id: 'rmp',
        company: 'Vision Research Lab, UC Santa Barbara',
        role: 'Student Researcher',
        date: 'Jan 2024 - May 2024',
        description: [
            'Conducted graduate-level research on the diagnosis of normal pressure hydrocephalus through computational modeling and brain CT scans, increasing accuracy by 3% and precision by 14% compared to standard diagnosis method',
            'Created novel diagnosis method and compiled findings into poster, research paper, and presentation; presented to 100+ people at symposium',
            '1 of 75 accepted into program out of 2000+ applicants'
        ],
    },
];

const ExperienceSection = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    const handleExperienceClick = (id) => {
        const experience = experiences.find((exp) => exp.id === id);
        setSelectedExperience(experience);
    };

    return (
        <div className="experience-container">
            {/* Left Side - List of Experiences */}
            <div className="experience-sidebar">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className={`experience-item ${selectedExperience.id === exp.id ? 'selected' : ''}`}
                        onClick={() => handleExperienceClick(exp.id)}
                    >
                        {exp.company}
                    </div>
                ))}
            </div>

            {/* Right Side - Details of the Selected Experience */}
            <div className="experience-details">
                <h2>{selectedExperience.company}</h2>

                {/* Check if the experience has multiple roles */}
                {selectedExperience.roles ? (
                    selectedExperience.roles.map((role, index) => (
                        <div key={index} className="role-section">
                            <h3>{role.role}</h3>
                            <p><strong>{role.date}</strong></p>
                            {role.description.map((desc, idx) => (
                                <p key={idx}>↠ {desc}</p>
                            ))}
                        </div>
                    ))
                ) : (
                    // If there's only one role, render it as before
                    <>
                        <h3>{selectedExperience.role}</h3>
                        <p><strong>{selectedExperience.date}</strong></p>
                        {selectedExperience.description.map((desc, idx) => (
                            <p key={idx}>↠ {desc}</p>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ExperienceSection;
