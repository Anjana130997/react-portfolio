import React, { useEffect, useRef } from "react";
import "../styles/githubstats.css";
import VanillaTilt from "vanilla-tilt";

export default function GitHubStats() {
  const tiltRef = useRef([]);

const githubImages = [`https://github-readme-stats.vercel.app/api/top-langs/?username=Anjana130997&theme=vue-dark&bg_color=1c1c1c&text_color=f0f0f0&icon_color=73cae7&card_width=300px&title_color=73cae7&show_icons=true&hide_border=true&layout=compact&cache_seconds=3600`,
  `https://github-readme-streak-stats.herokuapp.com/?user=Anjana130997&theme=shadow-brown&card_width=420&card_height=100&background=1c1c1c&stroke=f3a296&ring=f0f0f0&currStreakNum=73cae7&sideLabels=f0f0f0&fire=EB4506&sideNums=f0f0f0&border=1c1c1c`,
  `https://github-readme-stats.vercel.app/api?username=Anjana130997&bg_color=1c1c1c&text_color=f0f0f0&icon_color=73cae7&title_color=73cae7&card_width=300px&show_icons=true&hide_border=true&count_private=true&cache_seconds=3600`    ];
  useEffect(() => {
    tiltRef.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.05
        });
      }
    });
  }, []);

  return (
    <section id="github" className="github reveal">
      <div className="section-title">
        <h2>GitHub Stats</h2>
        <div className="section-divider"></div>
      </div>

      <div className="github-grid reveal">
        {githubImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => (tiltRef.current[i] = el)}
            className="github-card"
          >
            <img src={src} alt={`GitHub Stats ${i + 1}`} loading="eager" />
          </div>
        ))}
      </div>
    </section>
  );
}
