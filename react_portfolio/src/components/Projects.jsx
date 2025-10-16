import React from "react";
import "../styles/projects.css";
import bricksy from "../assets/bricksy.png";
import justiceJuggernauts from "../assets/justiceJuggernauts.png";
import renovationTracker from "../assets/renovationTracker.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bricksy",
    desc: "An individual React-based web application featuring a modern, responsive interface and continuously being improved.",
    tech: ["React", "CSS", "Firebase"],
    img: bricksy,
    live: "https://brickssy.netlify.app/",
    github: "https://github.com/Anjana130997/Bricksy.git",
  },
{
  title: "Renovation Tracker",
  desc: "An individual web application designed to help homeowners and contractors efficiently plan and manage renovation projects, including budgets, tasks, and inventory.",
  tech: ["HTML", "CSS", "JavaScript", "JSON"],
  img: renovationTracker,
  live: "https://renovationtracker.netlify.app/",
  github: "https://github.com/Anjana130997/RenovationTracker.git",
},

 {
  title: "Movie_Buff",
  desc: "A collaborative web application for booking movies online, allowing users to browse showtimes, select seats, and manage bookings efficiently.",
  tech: ["HTML", "CSS", "JavaScript"],
  img: justiceJuggernauts,
  live: "https://moviebuff-ticket-booking.netlify.app/",
  github: "https://github.com/Dhananjay155/Justice-Juggernauts_023.git",
},
];

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card" style={{ animationDelay: `${i * 0.3}s` }}>
            <div className="project-media">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="details">{p.desc}</p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> {p.tech.join(" | ")}
              </p>
              <div className="project-buttons">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-link">
                  <FaExternalLinkAlt className="icon" /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-link secondary">
                  <FaGithub className="icon" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
