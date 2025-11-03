import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import hallaptop from "../assets/hallap2.png";
import halmobile from "../assets/hallap.png";
import bea1 from "../assets/bae1.png";
import bea2 from "../assets/bea2.png";
import cam1 from "../assets/cam1.png";
import cam2 from "../assets/cam2.png";
import pig1 from "../assets/Pig1.png";
import pig2 from "../assets/Pig2.png";
import nu1 from "../assets/nu1.png";
import nu2 from "../assets/nu2.png";

const projects = [
  {
    id: 1,
    title: "Haleem Fashion Website",
    laptopImg: hallaptop,
    mobileImg: halmobile,
    link: "https://haleemfash.vercel.app/",
  },
  {
    id: 2,
    title: "Beautiful Beach",
    laptopImg: bea2,
    mobileImg: bea1,
    link: "https://beautifuk-beaches.vercel.app/",
  },
  {
    id: 3,
    title: "Campus Connect",
    laptopImg: cam1,
    mobileImg: cam2,
    link: "https://techniverse-campusconnect.vercel.app/",
  },
  {
    id: 4,
    title: "Bsf Pro",
    laptopImg: pig1,
    mobileImg: pig2,
    link: "https://bsf-prong.vercel.app/",
  },
  {
    id: 5,
    title: "Nutri Life",
    laptopImg: nu1,
    mobileImg: nu2,
    link: "https://nutri-life-eight.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((p, index) => (
          <motion.div
            className="project-card"
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <div className="project-images">
              <img
                src={p.laptopImg}
                alt={`${p.title} laptop`}
                className="laptop-frame"
              />
              <img
                src={p.mobileImg}
                alt={`${p.title} mobile`}
                className="mobile-frame"
              />
            </div>

            <div className="overlay">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Project
              </a>
            </div>

            <h3 className="project-title">{p.title}</h3>
          </motion.div>
        ))} 
      </div>
      <button className="view-more-btn">
  <a
    href="https://github.com/olami20-dev"
    target="_blank"
    rel="noopener noreferrer"
  >
    View More
  </a>
</button>

    </section>
  );
}