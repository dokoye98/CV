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
      <p>Please click my profile pic</p>
      <h2>Key Skills</h2>
  
  <h3>IT Technician Skills</h3>
  <ul class="skills-list">
    <li>Technical Troubleshooting and Diagnostics</li>
    <li>Linux (Ubuntu)</li>
    <li>Remote Support and Diagnostics</li>
    <li>Hardware Configuration and System Setup</li>
    <li>Network Configuration and IT Infrastructure</li>
    <li>Microsoft Windows/Linux Server Management</li>
    <li>Anti-Virus Software Management</li>
    <li>Office 365 and Microsoft Azure</li>
  </ul>

  <h3>Web Development Skills</h3>
  <ul class="skills-list">
    <li>Frontend Development: HTML, CSS, JavaScript, React</li>
    <li>Backend Development: Node.js (Express, Nodemon), Java</li>
    <li>Database Management: MongoDB, MySQL</li>
    <li>Version Control: Git</li>
    <li>Containerisation: Docker & Kubernetes</li>
    <li>Scripting and Automation: Python</li>
  </ul>

  <h3>DevOps and Deployment Tools</h3>
<ul class="skills-list">
  <li>Docker, Kubernetes</li>
  <li>AWS, GCP</li>
  <li>Jenkins, Terraform</li>
</ul>

    </div>
  );
}

export default Homepage;
