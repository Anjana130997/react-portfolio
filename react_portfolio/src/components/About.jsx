import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
           I’m a passionate Full Stack Web Developer who blends clean code with creative design to build responsive, high-performing web applications. I focus on developing user-friendly interfaces and robust backend systems through research, prototyping, and efficient problem-solving. I’m always eager to learn new technologies and contribute to building innovative digital solutions.
          </p>
        </div>

        <div className="about-gif reveal">
          <img src="https://i.pinimg.com/736x/09/ab/cc/09abcca0eea3e28c1911e04aa9bb4632.jpg" alt="Girl Coding" />
        </div>
      </div>
    </section>
  );
}
