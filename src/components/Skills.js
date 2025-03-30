import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <ul className="skills-list">
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS, Bootstrap</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB, SQL</li>
        // <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>Others:</strong> ServiceNow</li>
        <li><strong>Programming Languages:</strong> Python, Java, C++</li>
        <li><strong>Tools:</strong> Visual Studio Code, MySql</li>
      </ul>
    </div>
  );
};

export default Skills;
