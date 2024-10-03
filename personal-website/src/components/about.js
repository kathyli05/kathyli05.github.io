import React from 'react';
import './about.css'; // Assuming you'll style this in a CSS file

function AboutMe() {
    const top3Categories = [
        { title: 'Animals', items: ['Cats', 'Sharks', 'Penguins'] },
        { title: 'Media', items: ['Harley Quinn (TV)', 'Everything Everywhere All At Once', 'Food, Beauty, Mind | Philsophy Tube'] },
        { title: 'Games', items: ['Hades', 'League of Legends', 'Turnip Boy Commits Tax Evasion'] },
        { title: 'Time Consuming Activities', items: ['Crosswords (bonus if solved with friends)', 'Video Essays', 'Long nighttime walks with friends'] },
        { title: 'Life Mottos', items: ['"I\'d rather regret doing something than not doing something"', '"Every two people in the world have something in common"', '"It\'s not that deep - go for it!"'] },
        { title: 'Apps', items: ['Untold - the Voice Journal', 'Candy Crush', 'Notes'] },
    ];

    return (
        <div className="about-me-section">
            <div className="section">
                <h3>A little more info...</h3>
                <p>
                    Ultimately, I hope to propose and develop forward-thinking solutions that prioritize both innovation and accessibility. I am always eager to expand my skill set and collaborate with ethical tech companies that value social responsibility and positive community impact.
                </p>
                <p>                    With various experience in tech leadership, research, and development, I excel in dynamic and collaborative environments. I thrive especially when working in cross-functional teams and am deeply committed to fostering diversity, equity, and inclusion in tech spaces. Mentorship and advocacy for underrepresented groups in STEM are integral to me, and I continuously seek opportunities to uplift and empower others.
                </p>
                <p> I'm always looking to learn new things and meet new people. Feel free to connect via         <a href="ttps://linkedin.com/in/kathymli"> LinkedIn</a> or contact me directly at kathyli.2305@gmail.com.</p>
            </div>

            {/* Things I Want to Explore */}
            <div className="section">
                <h3>Things I Want to Explore</h3>
                <div className="card-grid">
                    <div className="card">Coding AI responsibly</div>
                    <div className="card">Various career prospects</div>
                    <div className="card">Why my laptop keeps beeping</div>
                </div>
            </div>

            {/* Skills I Want to Develop */}
            <div className="section">
                <h3>Skills I Want to Further Develop</h3>
                <div className="card-grid">
                    <div className="card">SQL</div>
                    <div className="card">Gathering company metrics and KPIs</div>
                    <div className="card">Finding the source of my laptop's incessant beeping</div>
                </div>
            </div>

            {/* Projects I Want to Make */}
            <div className="section">
                <h3>Projects I Want to Make</h3>
                <div className="card-grid">
                    <div className="card">Accessible learning tool (automatic summaries, closed captioning, text-to-speech)</div>
                    <div className="card">2024 League of Legends World Championships data analysis</div>
                    <div className="card">Something that can instantly transfer information from my phone to my laptop because I can't keep emailing myself and Phone Link doesn't work for me??!!</div>
                </div>
            </div>

            {/* Top 3s */}
            <div className="section">
                <h3>Top 3s</h3>
                <div className="grid-container">
                    {top3Categories.map((category) => (
                        <div className="grid-item" key={category.title}>
                            <h4>{category.title}</h4>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
