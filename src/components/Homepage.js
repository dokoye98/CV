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
      <h2>Key Skills and Certifications</h2>
      <h3>Certifications</h3>
      <ul class="skills-list">
        <li>Microsoft Certified: Security, Compliance, and Identity Fundamentals</li>
      <li>Microsoft Certified: Azure Fundamentals</li> 
        <li>Newto CompTIA A+ Certified Core 1 and 2</li>
        <li>Newto CompTIA Network+ Certified</li>
        </ul>
        <h3>Security Skills</h3>
<ul class="skills-list">
  <li>Security Fundamentals: CIA Triad, Least Privilege, Risk Management</li>
  <li>Log Review and Monitoring (Windows Event Viewer, basic SIEM concepts)</li>
  <li>Identity & Access Management (IAM) with Active Directory</li>
  <li>PowerShell Scripting for Security Auditing and Automation</li>
  <li>Network Configuration and Monitoring (DNS, DHCP, NAT)</li>
  <li>Incident Response and Threat Detection Concepts</li>
  <li>Virtualized SOC Scenario Environments (VirtualBox, Kali Linux)</li>
  <li>Cloud Security Principles (Microsoft Azure – SC-900 & AZ-900 Certified)</li>
  <li>OS Hardening, GPO Configuration, and User Privilege Control</li>
  <li>Phishing Simulations and Malware Containment Labs</li>
</ul>
  
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

    </div>
  );
}

export default Homepage;
