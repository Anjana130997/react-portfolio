import React from "react";
import "../styles/projects.css";
import bricksy from "../assets/bricksy.png";
import masio from "../assets/masio.png";
import resumeBuilder from "../assets/resumeBuilder.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Masio (Casio Clone)",
    desc: "MASIO is a sleek, responsive e-commerce website designed as a tribute to Casio's iconic watch lineup. Developed over 5 days by a team of 5 members, showcasing rapid prototyping and polished UI.",
    tech: ["HTML", "CSS", "JS"],
    img: masio,
    live: "https://masiowatch.netlify.app",
    github: "https://github.com/sumanthbelladhi/App-Archers_030.git",
  },
  {
    title: "Resume Builder",
    desc: "A collaborative React-based web app allowing users to create, preview, and download professional resumes with customizable templates.",
    tech: ["React","Tailwind", "CSS","Responsive-design"],
    img: resumeBuilder,
    live: "https://6702e693ef9caab567b2ac54--zingy-longma-10b25b.netlify.app/",
    github: "https://github.com/Akashgupta857/carbon-neutral-coders_022.git",
  },
  {
    title: "Bricksy",
    desc: "An individual React-based web application featuring a modern, responsive interface and continuously being improved.",
    tech: ["React", "CSS", "Firebase"],
    img: bricksy,
    live: "https://brickssy.netlify.app/",
    github: "https://github.com/Anjana130997/Bricksy.git",
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
                <strong>Tech Stack: </strong>{p.tech.join(" | ")}
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
