import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [active, setActive] = useState("Home");

  const handleClick = (link) => {
    setActive(link);

    const section = document.getElementById(link.toLowerCase());
    const navbar = document.querySelector(".navbar");

    if (section && navbar) {
      const yOffset = -navbar.offsetHeight;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#home, #skills, #projects, #education, #contact"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      {
        threshold: 0.3,                 // सिर्फ 30% दिखना काफी है
        rootMargin: "0px 0px -30% 0px", // नीचे से जल्दी trigger करो
      }
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Last section (Contact) के लिए fallback
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (Math.abs(scrollPos - docHeight) < 5) {
        setActive("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">🚀 Happy Tyagi</h1>
      <div className="logo-t">
        <h1>Hk</h1>
      </div>
      <ul className="nav-links">
        {["Home", "Skills", "Projects", "Education", "Contact"].map((link) => (
          <li
            key={link}
            className={active === link ? "active" : ""}
            onClick={() => handleClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>
      <h1 className="hamberger">
        <GiHamburgerMenu />
      </h1>
    </nav>
  );
}

export default Navbar;
