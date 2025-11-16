import React from "react";
import profilePic from "../images/profilePic.JPG";
import "../stylesheets/homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Hi, my name is Dwayne Okoye-Kachikwu</h1>

      <div className="profile-pic-container">
        <a
          href="https://www.linkedin.com/in/dwayne-okoye-kachikwu-ab856220a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={profilePic}
            alt="Dwayne Okoye-Kachikwu"
            className="profile-pic"
          />
        </a>
      </div>

      <p className="homepage-tagline">
        I am an IT Security Analyst with hands on experience in SOC operations,
        incident response, cloud security, and detection engineering.
        Click my profile picture to connect with me on LinkedIn.
      </p>

      <section className="section">
        <h2>Key Skills and Certifications</h2>

        <h3>Certifications</h3>
        <ul className="skills-list">
          <li>CompTIA Security+ (SY0-701)</li>
          <li>Blue Team Level 1 - Security Blue Team</li>
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
          <li>
            Microsoft Certified: Security, Compliance, and Identity Fundamentals
            (SC-900)
          </li>
          <li>CompTIA CySA+ (In Progress)</li>
          <li>CIISec Affiliate Member (ACIIS)</li>
          <li>Newto CompTIA A+ Core 1 and 2</li>
          <li>Newto CompTIA Network+</li>
        </ul>
      </section>

      <section className="section">
        <h3>Security Skills</h3>
        <ul className="skills-list">
          <li>
            Security Fundamentals including CIA triad, least privilege, and risk
            management
          </li>
          <li>
            Log review and monitoring with Windows Event Viewer, Sysmon, Splunk,
            and Azure Sentinel
          </li>
          <li>
            Incident response, threat detection, and MITRE ATT&amp;CK based
            analysis
          </li>
          <li>
            Identity and access management with Azure and on premises
            environments
          </li>
          <li>
            Firewall configuration, packet analysis with Wireshark, and IDS
            monitoring with Suricata
          </li>
          <li>
            Digital forensics and investigation using tools such as FTK Imager
            and Autopsy
          </li>
          <li>
            Cloud security principles and monitoring in Microsoft Azure
            (Defender, Sentinel)
          </li>
          <li>
            OS hardening, group policy configuration, and user privilege control
          </li>
          <li>
            PowerShell, Bash, and Python scripting for automation and security
            tasks
          </li>
          <li>
            Phishing, malware containment, and lab based SOC investigation
            scenarios
          </li>
        </ul>
      </section>

      <section className="section">
        <h3>IT Technician Skills</h3>
        <ul className="skills-list">
          <li>Technical troubleshooting and diagnostics</li>
          <li>Linux (Ubuntu) and basic server administration</li>
          <li>Remote support and user assistance</li>
          <li>Hardware configuration and system setup</li>
          <li>Network configuration including DNS, DHCP, and NAT</li>
          <li>Microsoft Windows and Linux server management</li>
          <li>Anti virus and endpoint protection administration</li>
          <li>Office 365 and Microsoft Azure administration</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
