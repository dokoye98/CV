import React from "react";
import profilePic from '../images/profilePic.JPG';
import '../stylesheets/homepage.css'; 

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Hi, my name is D'wayne Okoye-Kachikwu</h1>
      <div className="profile-pic-container">
        <a 
          href="https://www.linkedin.com/in/dwayne-okoye-kachikwu-ab856220a" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={profilePic} alt="D'wayne Okoye-Kachikwu" className="profile-pic" />
        </a>
      </div>
      <h2>Languages and Technologies</h2>
      <ul className="skills-list">
        <li>Java, Python, C++, C#</li>
        <li>HTML, CSS, JavaScript, React</li>
        <li>Node.js (Express, Nodemon)</li>
        <li>MongoDB, MySQL</li>
        <li>Git, Docker, Jenkins, Terraform, Kubernetes</li>
        <li>TensorFlow, Matplotlib, Pandas</li>
        <li>Selenium, Cucumber, SoapUI</li>
      </ul>
    </div>
  );
}

export default Homepage;
