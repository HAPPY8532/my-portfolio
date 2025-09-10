import React from "react";

import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaCar,
  FaShoppingCart,
  FaTasks,
  FaCloudSun,
} from "react-icons/fa";
import FinanceGrow from "../assets/FinanceGrow.png";
import CarRental from "../assets/car.png";
import ECommerce from "../assets/neomart.png";
import TodoList from "../assets/Task.png";
import "./Projects.css";
import { forwardRef } from "react";
const projects = [
  {
    title: "FinanceGrow Dashboard",
    status:"Completed",
    description:
      "FinanceGrow Dashboard is a personal finance tracker web app where users can manage income, expenses, set budgets, and analyze reports with interactive charts. It focuses on financial planning and visualization with a clean UI.",
    icon: <FaReact className="icon" style={{ color: "#61DBFB" }} />, 
    align: "right",
    colorClass: "line-blue",
    live: "https://financegrow.netlify.app/",
    code: "https://github.com/HAPPY8532/Expense-Tracker-Web",
    imgUrl:FinanceGrow,
    technologies: ["#React", "#TailwindCSS", "#Chart.js", "#JSON-Server"],
  },
  {
    title: "Car Rental Web App",
    status:"Completed",
    description:
      "Car Rental Web App is a frontend project built with React where users can explore cars, check details, compare prices, and book rentals. It focuses on a responsive design with modern UI to provide a seamless booking experience.",
    icon: <FaCar className="icon" style={{ color: "#FF5733" }} />,
    align: "left",
    colorClass: "line-orange",
    live: "https://rentacarweb1.netlify.app/", 
    code: "https://github.com/HAPPY8532/car-rental-website", 
    imgUrl:CarRental,
    technologies: ["#React.js", "#TailwindCSS", "#JavaScript"],
  },
  {
    title: "E-Commerce Web App NeoMart",
    status:"Completed",
    description:
      "E-Commerce Web App is a frontend project built to simulate an online shopping experience. Users can browse products, view details, add items to the cart, and proceed to checkout. It focuses on responsive design, clean UI, and smooth user interactions.",
    icon: <FaShoppingCart className="icon" style={{ color: "#4CAF50" }} />,
    align: "right",
    colorClass: "line-green",
    live: "https://shoping-web-neo-mart.netlify.app/", 
    code: "https://github.com/HAPPY8532/Ecommerce-Web", 
    imgUrl:ECommerce,
    technologies: ["#React.js", "#TailwindCSS", "#JavaScript"],
  }
  ,
  {
  title: "To-Do List App",
  status:"Completed",
  description:
    "To-Do List App is a simple yet powerful productivity tool built with React. Users can add, edit, mark as completed, and delete tasks. It emphasizes clean design, smooth interactions, and efficient state management.",
  icon: <FaTasks className="icon" style={{ color: "#FF9800" }} />,
  align: "left",
  colorClass: "line-yellow",
  live: "https://zippy-brioche-77151f.netlify.app/", 
  code: "https://github.com/HAPPY8532/To-Do-List-App", 
  imgUrl:TodoList,
  technologies: ["#HTML5", "#CSS3", "#JavaScript","#LocalStorage"],
},
  {
  title: "Weather App",
  status:"in Progress",
  description:
    "Weather App is a React project that fetches real-time weather data using an external API. Users can search any city to get live temperature, humidity, wind speed, and conditions. The app also includes animated weather icons for a modern UI experience.",
  icon: <FaCloudSun className="icon" style={{ color: "#00BFFF" }} />,
  align: "right",
  colorClass: "line-sky",
  live: "https://weather-app-happy.netlify.app/", 
  code: "https://github.com/HAPPY8532/My-Weather-App", 
  imgUrl:
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&auto=format&fit=crop&q=60",
  technologies: ["#React.js", "#CSS3", "#OpenWeatherAPI"],
},
];

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="projects-container">
        <div className="blob-1"></div>
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
                  <p style={{fontSize:"19px", fontWeight:"800"}}>Status:- <span style={{color:"green"}}>{project.status}</span></p>
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
