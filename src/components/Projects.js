import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Food Ordering Website</h3>
          <p>
            A web app to browse menus, place orders, and track the status of orders.
            <br />
            <strong>Tech Stack:</strong> ReactJS, Node.js, MongoDB
          </p>
          <a href="https://github.com/BhavyaGullipelli/Food-Ordering-Website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p>
            A system to manage hotel bookings, check-ins, check-outs, and customer information.
            <br />
            <strong>Tech Stack:</strong> Java, SQL
          </p>
          <a href="https://github.com/BhavyaGullipelli/Hotel-Management-System" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website showcasing my skills, projects, and experience.
            <br />
            <strong>Tech Stack:</strong> ReactJS
          </p>
          <a href="https://github.com/BhavyaGullipelli/Portfolio-Website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Route Planning Application</h3>
          <p>
            An application to find the shortest path between locations using algorithms.
            <br />
            <strong>Tech Stack:</strong> DSA, Java
          </p>
          <a href="https://github.com/BhavyaGullipelli/Route-Planning-Application" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
