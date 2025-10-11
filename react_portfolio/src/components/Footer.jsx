import React from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container reveal">
        <p>© {new Date().getFullYear()} Anjana — Built with React</p>

        <div className="footer-social">
          <a 
            href="https://www.linkedin.com/in/anjana-sureshbabu130997/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Anjana130997" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:anjana130997@gmail.com" 
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
