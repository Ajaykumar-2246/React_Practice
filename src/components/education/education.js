import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-item">
          <h4 className="header">
            Anurag University <span className="year">2021-2025</span>
          </h4>
          <p>
            <span>Degree:</span> Bachelor of Technology (B-Tech)
          </p>
          <p>
            <span>Specialization:</span> Artificial Intelligence
          </p>
          <p>
            <span>Certification:</span>
            <ol>
              <li>AWS Academy Cloud Foundations</li>
              <li> AWS Academy Could Security</li>
              <li>CyberSecurity Essentials</li>
              <li>Data Structures & Algorithms</li>
              <li>Programming Essentials in Python</li>
              <li>Introduction to Cyber Security </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <ol>
          <li>Watch Store Website(MEAN Stack)</li>
          <li>Chatbot on Legal Advice</li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
