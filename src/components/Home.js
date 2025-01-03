import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bhavya Sri Gullipelli</h1>
      <p>Welcome to my portfolio!</p>
      <p>
        I'm Bhavya, a passionate web developer with expertise in creating dynamic and user-friendly web applications. 
        With a strong foundation in frontend technologies like ReactJS and backend skills in Node.js, I strive to build 
        innovative solutions that not only meet user needs but also exceed expectations. Explore my work, learn about my journey, 
        and feel free to reach out for collaboration or opportunities.
      </p>

      {/* Resume Button */}
      <a href="https://drive.google.com/file/d/1_wQn5FBsc71qJcl5RREJfkD_W1dy1ACV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="resume-btn">Resume</button>
        </a>
    </div>
  );
};

export default Home;
