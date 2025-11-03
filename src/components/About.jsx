import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left side - Text */}
        <Fade direction="left" triggerOnce>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I'm a passionate <span>Developer</span> who loves building
              beautiful and interactive web experiences. My focus is on creating
              responsive, user-friendly, and high-performance websites using
              modern web technologies.
            </p>
            <p className="about-text">
              I enjoy turning ideas into reality with code, bringing designs to
              life with precision, and constantly learning new tools and
              frameworks to improve my craft. Right now, I’m leveling up my
              skills in software engineering, and I’m excited about creating
              impact and pushing boundaries in tech.
            </p>
          </div>
        </Fade>

        {/* Right side - Stacks */}
        <Zoom triggerOnce>
          <div className="stack-box">
            <h3>Tech Stack</h3>
            <div className="stack-grid">
              <Zoom delay={100} triggerOnce>
                <div className="stack-item">
                  <img src="/react.svg" alt="React" />
                  <p>React</p>
                </div>
              </Zoom>
              <Zoom delay={200} triggerOnce>
                <div className="stack-item">
                  <img src="/javascript.svg" alt="JavaScript" />
                  <p>JavaScript</p>
                </div>
              </Zoom>
              <Zoom delay={300} triggerOnce>
                <div className="stack-item">
                  <img src="/html5.svg" alt="HTML5" />
                  <p>HTML5</p>
                </div>
              </Zoom>
              <Zoom delay={400} triggerOnce>
                <div className="stack-item">
                  <img src="/css.svg" alt="CSS3" />
                  <p>CSS3</p>
                </div>
              </Zoom>
              <Zoom delay={500} triggerOnce>
                <div className="stack-item">
                  <img src="/figma.svg" alt="Figma" />
                  <p>Figma</p>
                </div>
              </Zoom>
              <Zoom delay={600} triggerOnce>
                <div className="stack-item">
                  <img src="/github.svg" alt="GitHub" />
                  <p>GitHub</p>
                </div>
              </Zoom>
              <Zoom delay={700} triggerOnce>
                <div className="stack-item">
                  <img src="/tailwindcss.svg" alt="Tailwind CSS" />
                  <p>Tailwind CSS</p>
                </div>
              </Zoom>
              <Zoom delay={800} triggerOnce>
                <div className="stack-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    alt="Java"
                  />
                  <p>Java</p>
                </div>
              </Zoom>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}
