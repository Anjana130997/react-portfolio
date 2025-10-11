import React from 'react';
import '../styles/education.css';

const Education = () => {
  return (
    <section id="education" className="education reveal">
      <div className="section-title">
        <h2>Education</h2>
        <div className="section-divider"></div>
      </div>

      <div className="education-grid">
        <div className="edu-card fade-in-up">
          <div className="edu-content">
            <h3>Pursuing</h3>
            <h4>Full Stack Web Development</h4>
            <p>Masai School, Bangalore</p>
          </div>
        </div>
                <div className="edu-card fade-in-up">
          <div className="edu-content">
            <h3>2015 - 2018</h3>
            <h4>B.com (PA)</h4>
            <p>Sri Krishna Arts and Science College, Coimbatore</p>
          </div>
        </div>

               <div className="edu-card fade-in-up">
          <div className="edu-content">
            <h3>2014 - 2015</h3>
            <h4>12th (State Board)</h4>
            <p>Bharathi Matriculation Higher Secondary School, Coimbatore</p>
          </div>
        </div>

                 <div className="edu-card fade-in-up">
          <div className="edu-content">
            <h3>2012 - 2013</h3>
            <h4>10th (State Board)</h4>
            <p>Bharathi Matriculation Higher Secondary School, Coimbatore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
