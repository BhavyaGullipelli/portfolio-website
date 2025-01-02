import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Import Section Components
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar with links */}
        <div className="Sidebar">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="Content">
          <Routes>
            {/* Define the routes for each section */}
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          {/* Main introduction */}
          <h1>Bhavya Sri Gullipelli</h1>
          <i><h3>Welcome to my portfolio!</h3></i>
          <i><h3>I'm Bhavya, a passionate web developer with expertise in creating dynamic and user-friendly web applications. With a strong foundation in frontend technologies like ReactJS and backend skills in Node.js, I strive to build innovative solutions that not only meet user needs but also exceed expectations. Explore my work, learn about my journey, and feel free to reach out for collaboration or opportunities.</h3></i>

          {/* Resume Button */}
          <h3><button className="resume-btn">Resume</button></h3>
        </div>
      </div>
      </Router>
    
  );
}

export default App;
