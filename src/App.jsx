// App.jsx
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  const projectRef = useRef(null)
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  }
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero onProjectClick ={scrollToProject} />
      <Skills />
      <Projects ref={projectRef}/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
