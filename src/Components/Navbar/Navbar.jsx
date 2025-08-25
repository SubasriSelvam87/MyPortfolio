import React, { useEffect } from "react";
// import { Link } from "react-scroll";
import "./Navbar.css";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Skills from "../Skills/Skills";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const handleLinkClick = (to) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: to === "HOME" ? 0 : -80,
    });
    setActiveLink(to); // ✅ manual highlight
    setMenuOpen(false); // ✅ close mobile menu
  };

  // 🔥 Track section in viewport
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id.toUpperCase()); // match navbar name
          }
        });
      },
      { threshold: 0.6 } // trigger when 60% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div style={{ background: "white" }}>
      <nav className="navbar mx-auto">
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Links */}
<ul className={`navbar-links ${menuOpen ? "open" : ""} mx-auto`}>
  {[
    "HOME",
    "SKILLS",
    "PROJECTS",
    "EDUCATION",
    "EXPERIENCE",
    "ABOUT ME",
  ].map((to) => (
    <li key={to}>
      <span
        onClick={() => handleLinkClick(to)}
        className={activeLink === to ? "active-link" : ""}
      >
        {to}
      </span>
    </li>
  ))}
</ul>

      </nav>

      {/* <div className="Bottomsection"> */}
      <Element name="HOME">
        <section
          id="HOME"
          className="home-section"
          style={{
            padding: "8%",
            //  background: `
            //       radial-gradient(circle at bottom left, white 10%, transparent 40%),
            //       radial-gradient(circle at bottom right, white 10%, transparent 40%),
            //       #6faef1dd
            //     `,
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          <Home />
        </section>
        {/* </div> */}
      </Element>

      {/* <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          
          <path fill="white" d="M0,0 H1440 V100 H0 Z" />
         
          <path
            fill="rgb(39, 172, 199)"
            d="M0,30
       C180,80 360,-20 540,30
       C720,80 900,-20 1080,30
       C1260,80 1440,-20 1620,30
       L1440,100 L0,100 Z"
          />
        </svg> */}

      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="white" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(145, 192, 214, 1)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z;
              M0,50 C480,100 960,20 1440,50 L1440,100 L0,100 Z;
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z
            "
            />
          </path>
        </g>
      </svg>

      <Element name="SKILLS">
        <section className="skills-section" id="SKILLS">
          <Skills />
        </section>
      </Element>
      {/* <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path fill="#C0DEED" d="M0,0 H1440 V100 H0 Z" />

          <g transform="scale(-1,1) translate(-1440,0)">
            <path
              fill=" white"
              d="M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
            />
          </g>
        </svg> */}

      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="#C0DEED" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="white">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z;
              M0,50 C480,100 960,20 1440,50 L1440,100 L0,100 Z;
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z
            "
            />
          </path>
        </g>
      </svg>
      <Element name="PROJECTS">
        <section className="projects-section" id="PROJECTS">
          <Projects />
        </section>
      </Element>

      {/* <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path fill="white" d="M0,0 H1440 V100 H0 Z" />

          <g transform="scale(-1,1) translate(-1440,0)">
            <path
              fill="rgba(112, 178, 198, 1) "
              d="M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
            />
          </g>
        </svg> */}

      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "120px" }}
      >
        {/* Background */}
        <path fill="white" d="M0,0 H1440 V120 H0 Z" />

        {/* Slower background wave */}
        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(112, 178, 198, 1)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,70 C480,130 960,10 1440,70 L1440,120 L0,120 Z;
              M0,50 C480,90 960,30 1440,50 L1440,120 L0,120 Z;
              M0,70 C480,130 960,10 1440,70 L1440,120 L0,120 Z
            "
            />
          </path>
        </g>

        {/* Faster foreground wave */}
        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(112, 178, 198, 1)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z;
              M0,40 C480,100 960,0 1440,40 L1440,120 L0,120 Z;
              M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z
            "
            />
          </path>
        </g>
      </svg>
      <Element name="EDUCATION">
        <section className="education-section" id="EDUCATION">
          <Education />
        </section>
      </Element>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="rgba(112, 178, 198, 1)" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path
            fill=" white"
            d="M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
          />
        </g>
      </svg>
      {/* <Element name="EXPERIENCE">
        <section
          className="experience-section"
          // style={{ background: "rgba(165, 175, 178, 1)" }}
        >
          <Experience />
        </section>
      </Element> */}
            <section id="EXPERIENCE" style={{background:"rgba(165, 175, 178, 1)"}}>
        <Experience />
      </section>
    </div>
  );
};

export default Navbar;
