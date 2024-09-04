import React from "react"
import profilePic from '../images/profilePic.JPG'
import '../stylesheets/experiences.css'

function Experiences() {
  return (
    <div className="experiences-container">
      <h1>Professional Experience</h1>
      
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
      <div className="experience-list">
        
        <div className="experience-item">
          <h2>Web Data Coordinator</h2>
          <h3>Institute of Structural Engineersn</h3>
          <p className="date">August 2024 - Present</p>
          <ul>
            <li>Reviewing and correcting data inconsistencies, formatting errors, and duplications in the migrated content to ensure it meets the required standards for publication.</li>
        
            <li>Ensuring that all data processing activities comply with the Data Protection Act 2018 and UK GDPR, maintaining high standards of data privacy and security.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>Coding/Big Data Teacher</h2>
          <h3>ISSFT Summer camp</h3>
          <p className="date">July 2024-August 2024</p>
          <ul>
            <li>Designed and implemented a robust coding curriculum that was not only beginner friendly but also challenged the more experienced programmers.</li>
            <li>Provided one-on-one mentorship and technical guidance to student, assisting them in debugging, code optimisation, and implementing best practices.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>Technology Associate - Test Analyst /Web Developer </h2>
          <h3>Infosys</h3>
          <p className="date">August 2022  - Febuary 2024</p>
          <ul>
            <li>Developed and executed test cases using Selenium, TestNG, and JUnit</li>
            <li>Developed web applications with node.js and react which were then deployed using docker and hosted in most cases with GCP (google cloud platform)</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>IT Consultant</h2>
          <h3>QA Community</h3>
          <p className="date">April 2022 - August 2022</p>
          <ul>
            <li>Worked in an agile team as both a Devops consultants and Java developer.</li>
            <li>After I was able to start the process of learning about different tools.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
