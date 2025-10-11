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
            I am a passionate web developer who loves combining clean code with strong design sense. I focus on building interfaces 
            that are visually appealing, user-friendly, and optimized for performance. My workflow includes research, prototyping, 
            iterative testing, and collaboration with cross-functional teams to deliver high-quality web experiences.
          </p>
        </div>

        <div className="about-gif reveal">
          <img src="https://i.pinimg.com/736x/09/ab/cc/09abcca0eea3e28c1911e04aa9bb4632.jpg" alt="Girl Coding" />
        </div>
      </div>
    </section>
  );
}
