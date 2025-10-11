import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';
import Particles from './components/Particles';
import "./styles/globals.css";

export default function App() {
  useReveal();

  return (
    <div className="site-root">
      {/* Full-page particle background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -9999,
          pointerEvents: 'none',
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main content with padding */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <GitHubStats />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
