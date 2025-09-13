import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Profile from "../assets/Profile.png";
import "./Hero.css";

function Hero({ onProjectClick }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero" id="home">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#f8f9fa" },
          particles: {
            color: { value: "#00bcd4" },
            move: { enable: true, speed: 1 },
            number: { value: 1000 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
        }}
      />

      {/* Floating Stars */}
      {[...Array(20)].map((_, i) => (
        <span key={i} className="star"></span>
      ))}

      {/* Decorative SVG Patterns */}
      <svg className="decor-line wave" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M0 50 Q 50 0 100 50 T 200 50" stroke="#b0bec5" strokeWidth="2" fill="transparent" strokeDasharray="6 6" />
      </svg>

      <svg className="decor-line zigzag" viewBox="0 0 200 100" preserveAspectRatio="none">
        <polyline
          points="0,80 20,20 40,80 60,20 80,80 100,20 120,80 140,20 160,80 180,20 200,80"
          stroke="#90a4ae"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>

      <svg className="decor-line orbit" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="#cfd8dc" strokeWidth="2" fill="transparent" strokeDasharray="4 8" />
      </svg>

      <svg className="decor-line diagonal" viewBox="0 0 200 200">
        <line x1="0" y1="200" x2="200" y2="0" stroke="#eceff1" strokeWidth="3" strokeDasharray="6 10" />
      </svg>

      <svg className="decor-line spiral" viewBox="0 0 200 200">
        <path
          d="M100,100 m -75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          stroke="#b0bec5"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>

      <svg className="decor-line top-left" viewBox="0 0 200 200">
        <path d="M0,100 C50,50 150,150 200,100" stroke="#90a4ae" strokeWidth="2" fill="transparent" strokeDasharray="6 6" />
      </svg>

      <svg className="decor-line top-right" viewBox="0 0 200 200">
        <path d="M0,50 C70,20 130,180 200,150" stroke="#b0bec5" strokeWidth="2" fill="transparent" />
      </svg>

      <svg className="decor-line bottom-left" viewBox="0 0 200 200">
        <path d="M0,150 C60,180 140,20 200,50" stroke="#cfd8dc" strokeWidth="3" fill="transparent" strokeDasharray="4 8" />
      </svg>

      <svg className="decor-line bottom-right" viewBox="0 0 200 200">
        <path d="M0,100 C50,150 150,50 200,100" stroke="#eceff1" strokeWidth="5" fill="transparent" />
      </svg>

      {/* Main Content */}
      <div className="hero-content">
        {/* Left Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h2>Hello 👋, I’m</h2>
          <h1>Happy Kumar</h1>
          <h3>
            <ReactTyped
              strings={[
                "Frontend Developer",
                "Web Developer",
                "React Enthusiast",
                "UI/UX Explorer",
                "Creative Coder",
              ]}
              typeSpeed={100}
              backSpeed={80}
              loop
            />
          </h3>
          <p>
            I create modern, responsive and interactive web applications with <b>React</b>, <b>JavaScript</b>, and{" "}
            <b>CSS</b>.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/HAPPY8532" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/happy-kumar-reactjsdev0001" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <motion.button whileHover={{ scale: 1.1 }} onClick={onProjectClick} className="btn primary">
              🚀 View Projects
            </motion.button>

            <motion.a
              href="/Happy-Kumar-Resume.pdf"
              download="Happy-Kumar-Resume.pdf"
              whileHover={{ scale: 1.1 }}
              className="btn secondary"
            >
              📄 Download Resume
            </motion.a>

            <motion.a
              href="/Happy-Kumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="btn outline"
            >
              👀 View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 5 }}
          className="hero-image"
        >
          <div className="glow-ring">
            <img src={Profile} alt="developer" className="profile-pic" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
