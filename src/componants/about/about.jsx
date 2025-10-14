import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <>
      <Fade direction="right">
        <section id="about">
          <h5>GetTo Know</h5>
          <h2>About Me</h2>
          <div className="container about-container">
            <div className="about-me">
              <div className="about-me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>
            <div className="about-content">
              <div className="about-cards">
                <article className="about-card">
                  <FaAward className="about-icon" />
                  <h5>Experience</h5>
                  <small>Senior Developer Of 3 Years</small>
                </article>
                <article className="about-card">
                  <FiUsers className="about-icon" />
                  <h5>Clients </h5>
                  <small>More than 100 Clients</small>
                </article>
                <article className="about-card">
                  <VscFolderLibrary className="about-icon" />
                  <h5>Projects</h5>
                  <small>30+ Completed</small>
                </article>
              </div>
              <p>
                Senior Front-End Engineer specializing in building fast,
                accessible, and scalable web apps with React, TypeScript, and
                Next.js. I design reusable component systems, translate Figma
                into pixel-perfect responsive UI, and optimize Core Web Vitals
                to drive measurable business impact. Comfortable across state
                management, API integration (REST/GraphQL), and animation with
                Framer Motion—backed by solid testing (Jest/RTL) and CI/CD
                practices. My focus: clean architecture, great UX, and shipping
                reliably at speed.
              </p>

              <a href="#contact" className="btn btn-primary">
                {" "}
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default About;
