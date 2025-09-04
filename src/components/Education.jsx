import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institute: "XYZ Institute of Technology",
      year: "2021 - 2025",
      status: "Ongoing",
      description:
        "Focused on Computer Science with coursework in web development, data structures, and machine learning.",
      skills: ["React", "JavaScript", "C++", "Data Structures"],
    },
    {
      degree: "Senior Secondary (12th)",
      institute: "ABC Senior Secondary School",
      year: "2019 - 2021",
      status: "Completed",
      description:
        "Studied Physics, Chemistry, Mathematics, and Computer Science with strong academic performance.",
      skills: ["Physics", "Mathematics", "Problem Solving"],
    },
    {
      degree: "Secondary (10th)",
      institute: "ABC Senior Secondary School",
      year: "2018 - 2019",
      status: "Completed",
      description:
        "Built strong foundations in science, mathematics, and logical reasoning.",
      skills: ["Science", "Mathematics", "Communication"],
    },
  ];

  return (
    <section className="education-container" id="education">
      <h2 className="education-heading">Education</h2>
      <div className="edu-grid edu-grid-top">
        {educationData.map((edu, index) => (
          <div className="edu-item" key={index}>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p><strong>Institute:</strong> {edu.institute}</p>
            <p><strong>Year:</strong> {edu.year}</p>
            <p><strong>Status:</strong> {edu.status}</p>
            <p className="edu-desc">{edu.description}</p>

            <div className="edu-skills">
              {edu.skills.map((skill, i) => (
                <span className="edu-skill" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
