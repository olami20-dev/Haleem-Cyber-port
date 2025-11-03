import '../styles/Hero.css';
import { Link } from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">Haleem</span>
        </h1>
        <h2 className="hero-subtitle">
          <span className="typing-text">Creative  Developer ⚡ Cyber Enthusiast</span>
        </h2>
        <p className="hero-desc">
          I craft sleek, fast, and intelligent web experiences — powered by React and a passion for design.
        </p>
       <a href="#projects">
  <button className="hero-btn">View My Work</button>
</a>

      </div>
      <div className="hero-glow"></div>
    </section>
  );
}
