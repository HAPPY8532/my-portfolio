import React from "react";
import "./Skills.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaGitAlt />, name: "Git" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="blob-1"></div>
  <div className="blob-2"></div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card">
            <span className="icon">{s.icon}</span>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
