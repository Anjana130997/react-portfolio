import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/hero.css';
import profile from '../assets/profile.jpg';
import TextType from './TextType';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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

  // Download + Open resume simultaneously
  const handleResumeClick = () => {
    const link = document.createElement('a');
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
          <button className="btn-ghost" onClick={handleResumeClick}>Download Resume</button>
        </div>

        {/* Social Icons */}
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/anjana-sureshbabu130997/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Anjana130997" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:anjana130997@gmail.com" title="Email">
            <FaEnvelope />
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
