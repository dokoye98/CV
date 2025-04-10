import React from "react";
import '../stylesheets/cybersecuritypath.css'

function CybersecurityPath() {
  return (
    <div className="experiences-container">
      <div id="Comptia_A+"></div>
      <div id="Network+">
        <h2>CompTIA A+ Core 1 and 2</h2>
        <a
          href="https://github.com/dokoye98/Cyber-Learning/tree/main/CompTIA%20A%2B%20Core%201%20and%202"
          className="date"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>CompTIA A+ Core 1 and 2</p>
        </a>
        <ul>
          <li>
            This section displays my skills in software troubleshooting, focusing on issues related to operating systems, hardware, and networking. It includes my two internal certifications.
          </li>
        </ul>

        <h2>CompTIA Network+</h2>
        <a
          href="https://github.com/dokoye98/Cyber-Learning/tree/main/CompTIA%20Networking%2B"
          className="date"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>CompTIA Network+</p>
        </a>
        <ul>
          <li>
            This project showcases my experience with network configurations, including Cisco Packet Tracer simulations and my internal Network+ certification. The goal is to understand network infrastructure and troubleshooting.
          </li>
        </ul>
        <h2>Azure Security</h2>
        <a
          href="https://github.com/dokoye98/Cyber-Learning/tree/main/Azure%20Security"
          className="date"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Cloud Security</p>
        </a>
        <ul>
          <li>
           This folder contains all of my azure security related certifications and projects.
          </li>
        </ul>
        
        <h2>ComTIA Security+</h2>
        <a
          href="https://github.com/dokoye98/Cyber-Learning/tree/main/CompTIA%20Security%2B"
          className="date"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>ComTIA Security+</p>
        </a>
        <ul>
          <li>
           This project showcases my understanding of security concepts, tools, and procedures. It also includes various Cybersecurity project I have completed.
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default CybersecurityPath;
