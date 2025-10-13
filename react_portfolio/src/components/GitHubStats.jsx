import React, { useEffect, useRef, useState } from "react";
import "../styles/githubstats.css";
import VanillaTilt from "vanilla-tilt";

export default function GitHubStats() {
  const tiltRef = useRef([]);
  const [visibleImages, setVisibleImages] = useState([]);

  const githubImages = [
    "https://github-readme-stats.vercel.app/api?username=anjana130997&show_icons=true&theme=radical&hide_border=true",
    "https://github-readme-streak-stats.herokuapp.com/?user=Anjana130997&theme=shadow-brown&card_width=420&card_height=100&background=1c1c1c&stroke=f3a296&ring=f0f0f0&currStreakNum=73cae7&sideLabels=f0f0f0&fire=EB4506&sideNums=f0f0f0&border=1c1c1c",
    "https://github-readme-stats.vercel.app/api/top-langs/?username=anjana130997&layout=compact&theme=radical&hide_border=true"
  ];

  // Preload images to check if they exist
  useEffect(() => {
    const loadImages = async () => {
      const validImages = [];
      for (let src of githubImages) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
          validImages.push(src);
        } catch (err) {
          // image failed to load, skip it
        }
      }
      setVisibleImages(validImages);
    };
    loadImages();
  }, []);

  // Initialize VanillaTilt for each card
  useEffect(() => {
    tiltRef.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.05,
        });
      }
    });
  }, [visibleImages]);

  return (
    <section id="github" className="github reveal">
      <div className="section-title">
        <h2>GitHub Stats</h2>
        <div className="section-divider"></div>
      </div>

      <div className="github-grid reveal">
        {visibleImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => (tiltRef.current[i] = el)}
            className="github-card"
          >
            <img
              src={src}
              alt={`GitHub Stats ${i + 1}`}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
