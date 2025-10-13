import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { 
  FaHome, FaUser, FaProjectDiagram, 
  FaGithub, FaEnvelope, FaFileDownload, FaBars, 
  FaTimes, FaCode, FaGraduationCap 
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const toggleMenu = () => setOpen(!open);

  // Resume download
  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = "/Anjana_ES_Resume.pdf";
    link.download = "Anjana_ES_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.open("/Anjana_ES_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <nav className="dock-navbar top">
        <ul className="dock-menu">
          <li><a href="#home" data-label="Home"><FaHome /></a></li>
          <li><a href="#about" data-label="About"><FaUser /></a></li>
          <li><a href="#education" data-label="Education"><FaGraduationCap /></a></li>
          <li><a href="#skills" data-label="Skills"><FaCode /></a></li>
          <li><a href="#projects" data-label="Projects"><FaProjectDiagram /></a></li>
          <li><a href="#github" data-label="GitHub"><FaGithub /></a></li>
          <li><a href="#contact" data-label="Contact"><FaEnvelope /></a></li>
          <li>
            <button className="resume-btn" onClick={handleResumeClick} data-label="Resume">
              <FaFileDownload />
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== Mobile Navbar ===== */}
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`mobile-menu ${open ? "open" : ""}`}>
          {["home", "about", "education", "skills", "projects", "github", "contact"].map((item, i) => (
            <li key={item} style={{ animationDelay: `${i * 0.05}s` }}>
              <a href={`#${item}`} onClick={() => setOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li style={{ animationDelay: `0.35s` }}>
            <button className="resume-btn" onClick={handleResumeClick}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
