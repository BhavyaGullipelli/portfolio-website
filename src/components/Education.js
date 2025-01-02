import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>

      <div className="education-card-container">
        <div className="education-card">
          <h2>Bachelor's Degree in Computer Science</h2>
          <p>
            <strong>Institution:</strong> Sagi Rama Krishnam Raju Engineering College, Bhimavaram
          </p>
          <p><strong>Year:</strong> 2021 - 2025</p>
          <p><strong>CGPA:</strong> 9.5</p>
        </div>

        <div className="education-card">
          <h2>Honor's Degree in Data Science</h2>
          <p>
            <strong>Institution:</strong> Sagi Rama Krishnam Raju Engineering College, Bhimavaram
          </p>
          <p><strong>CGPA:</strong> 9.0</p>
        </div>

        <div className="education-card">
          <h2>Intermediate Education</h2>
          <p>
            <strong>Institution:</strong> Tirumala Junior College, Bhimavaram
          </p>
          <p><strong>Year:</strong> 2019 - 2021</p>
          <p><strong>Percentage:</strong> 97.2%</p>
        </div>

        <div className="education-card">
          <h2>Secondary School Examination</h2>
          <p>
            <strong>Institution:</strong> Ravindra Bharathi E.M School, Bhimavaram
          </p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>CGPA:</strong> 9.8</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
