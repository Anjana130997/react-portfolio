import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import "../styles/skills.css";

export default function Skills() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 20,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
          scale: 1.05,
          perspective: 800,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((el) => {
        if (el && el.vanillaTilt) el.vanillaTilt.destroy();
      });
    };
  }, []);

  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "ReactJS", icon: <SiReact /> },
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <SiMysql /> },
  ];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="section-title">
        <h2>Tools & Skills</h2>
        <div className="section-divider"></div>
        <p className="skills-subtitle">
          These are the tools and technologies I use to design, build, and deploy modern web applications.
        </p>
      </div>

      <div className="skills-container">
        <div className="skills-left">
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <button
                key={i}
                ref={(el) => (tiltRefs.current[i] = el)}
                className="glass-icon-btn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="icon-btn__back"></span>
                <span className="icon-btn__front">
                  <span className="icon-btn__icon">{skill.icon}</span>
                </span>
                <span className="icon-btn__label">{skill.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="skills-right">
          <img
            src="https://camo.githubusercontent.com/5bf0da46c5398f75e2ec953592c02afcf69379dcdb12a0c2922654a57b51fce2/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313336343032392f73637265656e73686f74732f31363039333236382f6d656469612f36386538326137666234393034363134613930363664366235343063313462322e676966"
            alt="Girl Coding"
            className="skills-gif"
          />
        </div>
      </div>
    </section>
  );
}
