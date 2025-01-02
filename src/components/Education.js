import React from "react"
import profilePic from '../images/profilePic.JPG'
import '../stylesheets/experiences.css'

function Education() {
  return (
    <div className="experiences-container">
      <h1>Education</h1>
      
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
          <h2>Master of Science in Advanced Computing</h2>
          <h3>Birkbeck University of London</h3>
          <p className="date">October 2023 - December 2024</p>
          <ul>
            <li><h5>Grade</h5></li>
            <li>Merit</li>
            <li><h5>Dissertation</h5></li>
            <li>A Comprehensive Guide to Compiler Development: A Hybrid Python-Java Approach with Cloud Accessibility, focusing on user experience and accessibility.</li>
            <li><h5>Modules:</h5> Applied Machine Learning, Big Data Analytics, Cloud Computing, Data Science Techniques, Network Security, Natural Language Processing, Software Design, and Programming.</li>
          </ul>
        </div>
        <div className="experience-item">
  <h2>Cybersecurity Training</h2>
  <h3>Netcom Training</h3>
  <p className="date">December 2024 - August 2025</p>
  <ul>
    <li>Training in Microsoft Azure Fundamentals, CompTIA Security+, and CompTIA CySA+.</li>
    <li>Gained practical skills in cloud security, risk management, and network security fundamentals.</li>
    <li>Developed expertise in threat detection, incident response, and security operations.</li>
    <li>Focused on preparing for certifications that are essential for a career in cybersecurity.</li>
  </ul>
</div>

      
        <div className="experience-item">
          <h2>Infrastructure Technician Training</h2>
          <h3>Netcom Training</h3>
          <p className="date">March 2024 - June 2024</p>
          <ul>
            <li>Focusing on first-line support and IT infrastructure management.</li>
            <li>Gained practical skills in troubleshooting, network management, and cybersecurity fundamentals.</li>
            <li>Developed a strong understanding of hardware and software installation, configuration, and maintenance.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>Bachelor of Science in Biochemistry</h2>
          <h3>London Metropolitan University</h3>
          <p className="date">September 2018 - June 2022</p>
          <ul>
            <li>Conducted research on natural molecules that inhibit amyloid build-up, such as resveratrol, enhancing laboratory skills in biochemistry techniques.</li>
            <li>Gained expertise in molecular biology, organic chemistry, and analytical techniques, contributing to a strong foundation in scientific research.</li>
            <li>Improved laboratory skills including PCR, chromatography, and spectrophotometry, with a focus on precision and accuracy in experimental procedures.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education
