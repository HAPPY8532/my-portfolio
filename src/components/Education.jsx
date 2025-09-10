import React from "react";

import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Java-Full Stack Development Course",
      institute: "Ducat [DUCAT-Ghaziabad]",
      year: "July,2025 - Present",
      status: "Ongoing",
      description:
        "Focused on Java, Spring Boot, Hibernate, and building full-stack web applications.",
      skills: ["Java", "Spring Boot", "Hibernate", "SQL", "REST APIs", "Git" , "GitHub", "Maven" , "Docker" , "Microservices" , "Full-Stack Development"]
    },
    {
      degree: "Frontend Development Course",
      institute: "Ducat [DUCAT-Ghaziabad]",
      year: "Dec,2024 - July,2025",
      status: "Completed",
      description:
        "Focused on React, JavaScript, HTML, CSS3, and building responsive web applications.",
      skills: ["React", "JavaScript", "HTML", "CSS3", "Responsive Design", "Git" , "GitHub", "Bootstrap" , "Tailwind CSS" , "UI/UX" , "Web Development"]
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institute: "Harish Chandara Ramkali Institute of Technology [HRIT-Ghaziabad]",
      year: "2024",
      status: "Completed",
      description:
        "Focused on Computer Science with coursework in web development, data structures, and machine learning.",
      skills: ["React", "JavaScript", "HTML", "CSS3", "Data Structures"],
    },
    {
      degree: "Senior Secondary (12th)",
      institute: "Tagore Sikhsa Sadan Inter College Hapur [T.S.S Inter College Hapur]",
      year: "2017",
      status: "Completed",
      description:
        "Studied Physics, Chemistry, Mathematics,  with strong academic performance.",
      skills: ["Physics", "Chemistry","Mathematics"],
    },
    {
      degree: "Secondary (10th)",
      institute: "Gandhi Satabdi Smarak Inter College Kaili-Meerut [G.S.S Inter College Kaili-Meerut]",
      year: "2014",
      status: "Completed",
      description:
        "Built strong foundations in science, mathematics and communication skills.",
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
