import React from "react";

import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import "./Projects.css";
import { forwardRef } from "react";
const projects = [
  {
    title: "JavaScript Game",
    description:
      "This project is designed to showcase creativity and problem-solving skills. It highlights the use of modern technologies and efficient approaches.",
    icon: <FaJsSquare className="icon" style={{ color: "#F7DF1E" }} />,
    align: "right",
    colorClass: "line-yellow",
    live: "https://your-js-game-demo.com",
    code: "https://github.com/your-username/js-game",
    imgUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60",
    technologies: ["#JavaScript", "#HTML5", "#CSS3"],
  },
  {
    title: "React Portfolio",
    description:
      "This project is designed to showcase creativity and problem-solving skills. It highlights the use of modern technologies and efficient approaches.",
    icon: <FaReact className="icon" style={{ color: "#61DAFB" }} />,
    align: "left",
    colorClass: "line-blue",
    live: "https://your-portfolio-demo.com",
    code: "https://github.com/your-username/portfolio",
    imgUrl:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=500&auto=format&fit=crop&q=60",
    technologies: ["#React.js", "#CSS3", "#JavaScript"],
  },
  {
    title: "HTML Landing Page",
    description:
      "This project is designed to showcase creativity and problem-solving skills. It highlights the use of modern technologies and efficient approaches.",
    icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} />,
    align: "right",
    colorClass: "line-orange",
    live: "https://your-html-demo.com",
    code: "https://github.com/your-username/html-landing",
    imgUrl:
      "https://images.unsplash.com/photo-1543269664-6e49e46d59a8?w=500&auto=format&fit=crop&q=60",
    technologies: ["#HTML5", "#CSS3", "#JavaScript"],
  },
  {
    title: "Node.js API",
    description:
      "This project is designed to showcase creativity and problem-solving skills. It highlights the use of modern technologies and efficient approaches.",
    icon: <FaNodeJs className="icon" style={{ color: "#3C873A" }} />,
    align: "left",
    colorClass: "line-green",
    live: "https://your-node-api-demo.com",
    code: "https://github.com/your-username/node-api",
    imgUrl:
      "https://images.unsplash.com/photo-1730343463048-3e2d906309d1?w=500&auto=format&fit=crop&q=60",
    technologies: ["#Node.js", "#Express.js", "#MongoDB"],
  },
  {
    title: "CSS Animations",
    description:
      "This project is designed to showcase creativity and problem-solving skills. It highlights the use of modern technologies and efficient approaches.",
    icon: <FaCss3Alt className="icon" style={{ color: "#264de4" }} />,
    align: "right",
    colorClass: "line-lightblue",
    live: "https://your-css-demo.com",
    code: "https://github.com/your-username/css-animations",
    imgUrl:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&auto=format&fit=crop&q=60",
    technologies: ["#CSS3", "#Animations", "#JavaScript"],
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section  ref={ref} className="projects-section">
      <div  className="projects-container">
        <div  className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
        <div className="blob-4"></div>98
        <div className="projects-heading">
          <h2>Latest Work</h2>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="timeline desktop-only">
          <div className="vertical-line" />
          {projects.map((project, index) => {
            const isLeft = project.align === "left";

            return (
              <div
                key={index}
                className={`timeline-item ${isLeft ? "left" : "right"} ${project.colorClass}`}
              >
                {/* Image */}
                <div className="project-card">
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                {/* Details */}
                <div className="project-details">
                  <h3 className={project.colorClass}>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Technologies */}
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="border-icons">
                  <div className="dot">{project.icon}</div>
                </div>
                <div className={`horizontal-line ${project.colorClass}`} />
              </div>
            );
          })}
        </div>

        {/* Mobile Card Layout */}
        <div className="mobile-only">
          {projects.map((project, index) => (
            <div key={index} className="project-card-mobile">
              <div className="project-card">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}

                </div>
                <div className="project-buttons">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
