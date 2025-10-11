import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaGithub, FaEnvelope, FaFileDownload, FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ===== Desktop Sticky Top Navbar ===== */}
      <nav className="dock-navbar top">
        <ul className="dock-menu">
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#home" title="Home"><FaHome /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#about" title="About"><FaUser /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#experience" title="Experience"><FaBriefcase /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#skills" title="Skills"><FaCode /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#projects" title="Projects"><FaProjectDiagram /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#github" title="GitHub"><FaGithub /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="#contact" title="Contact"><FaEnvelope /></a>
          </li>
          <li style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}>
            <a href="/resume.pdf" download title="Resume"><FaFileDownload /></a>
          </li>
        </ul>
      </nav>

      {/* ===== Mobile Hamburger Navbar ===== */}
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`mobile-menu ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#github" onClick={closeMenu}>GitHub</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="/resume.pdf" download onClick={closeMenu}>Resume</a></li>
        </ul>
      </div>
    </>
  );
}
