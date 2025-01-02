import React from 'react';
import './Internships.css';

const Internships = () => {
  return (
    <div className="internships-container">
      <h1>Internships</h1>

      <div className="internships-row">
        <div className="internship-card">
          <h3>Internship at IIDT Blackbucks</h3>
          <p>
            <strong>Duration:</strong> Jun 2024 - August 2024
            <br />
            <strong>Role:</strong> FullStack Development Intern
            <br />
            <strong>Technologies:</strong> ReactJS, Node.js, MongoDB
          </p>
          <p>
            During my full-stack internship, I gained hands-on experience with ReactJS and MongoDB. I developed dynamic,
            user-friendly interfaces with ReactJS, while using MongoDB for efficient data storage and management. This role
            helped me strengthen my full-stack skills, troubleshoot performance issues, and collaborate effectively to build robust
            web applications.
          </p>
        </div>

        <div className="internship-card">
          <h3>Internship at Henotic IT Solutions</h3>
          <p>
            <strong>Duration:</strong> July 2023 - Sep 2023
            <br />
            <strong>Role:</strong> DSA using Java Intern
            <br />
            <strong>Technologies:</strong> DSA, JAVA
          </p>
          <p>
            During my Java internship, I strengthened my understanding of core Java concepts and gained hands-on experience
            with SQL for database management. This role helped me develop efficient code, work with relational databases, and
            apply my skills to solve real-world problems in a collaborative environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
