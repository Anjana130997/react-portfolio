import React from 'react';
import '../styles/experience.css';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Business Development Executive',
      company: 'Byju’s',
      duration: 'Jan 2020 – June 2020',
      details:
        'Worked closely with clients to understand their needs and provide tailored solutions. Improved communication and negotiation skills to enhance client relationships. Focused on customer acquisition strategies, driving engagement and contributing to sales growth.',
    },
  ];

  return (
    <section id="experience" className="experience reveal">
      <div className="section-title">
        <h2>Experience</h2>
        <div className="section-divider"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card" style={{ animationDelay: `${i * 0.3}s` }}>
            <div className="exp-icon">
              <Briefcase size={28} />
            </div>
            <div className="exp-content">
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} — <span>{exp.duration}</span>
              </p>
              <p className="details">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
