import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/hero.css';
import profile from '../assets/profile.jpg';
import TextType from './TextType';

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <section id="home" className="hero container">
      {/* Left Side */}
      <div className="hero-left reveal">
        <h1>
          Hey, I'm <span className="accent">Anjana E S</span>
        </h1>

        {/* Typing Text */}
        <div className="typing-wrapper">
          <TextType
            text={[
              "Full Stack Innovator 💻",
              "Tech Explorer 🌐",
              "Creative Problem Solver 🚀",
              "UI/UX Advocate 🎨",
              "Continuous Learner 📚"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Buttons */}
        <div className="hero-cta">
          <a className="btn-primary" href="#projects">See Projects</a>
          <a 
            className="btn-ghost" 
            href="/Anjana_ES_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Anjana_ES_Resume.pdf"
          >
           Download Resume
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right reveal">
        <div ref={cardRef} className="profile-card">
          <img src={profile} alt="Anjana E S" />
          <div className="card-info">
            <h3>Open to Work</h3>
            <p>Available for frontend & full-stack roles, contract work, and collaborations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
