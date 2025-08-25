import React, { useState } from "react";
import "./Skills.css";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  TbBrandAngular,
  TbBrandCss3,
  TbBrandFramerMotion,
  TbBrandHtml5,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import {
  SiFormik,
  SiMui,
  SiPostman,
  SiReactrouter,
  SiSpringboot,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { PiFileSqlDuotone } from "react-icons/pi";
import { DiScrum } from "react-icons/di";
import { LiaJira } from "react-icons/lia";
import { VscSettingsGear } from "react-icons/vsc";

const Skills = () => {
  const sections = ["FRONT-END", "BACK-END", "OTHERS"];
  const [activeIndex, setActiveIndex] = useState(0);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <section className="skill-section">
            <div className="container">
              <div className="row g-3 ">
                <div className="col-md-8 card skill-box">
                  <div className=" text-center p-3 ">
                    <h5>
                      <b>FRAMEWORKS & LIBRARIES</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        <FaReact size={20} /> React
                      </span>
                      <span>
                        <TbBrandAngular size={20} /> Angular (Basic)
                      </span>
                      <span>
                        <SiMui size={20} /> MaterialUI (MUI)
                      </span>
                      <span>
                        <SiFormik size={20} /> Formik
                      </span>
                      <span>
                        <TbBrandFramerMotion size={20} /> Framer Motion
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="card skill-box text-center p-3 ">
                    <h5>
                      <b>LANGUAGES</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        <RiJavascriptLine size={20} />
                        Javascript (ES6+),
                      </span>
                      <span>
                        <TbBrandHtml5 size={20} /> HTML5,
                      </span>
                      <span>
                        <TbBrandCss3 size={20} /> CSS3,
                      </span>
                      <span>
                        <TbBrandTypescript size={20} /> Typescript(Basic)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 card skill-box">
                  <div className=" text-center p-3 ">
                    <h5>
                      <b>ROUTING & STATE MANAGEMENT</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        {" "}
                        <SiReactrouter size={20} />
                        React Router,{" "}
                      </span>
                      <span>
                        {" "}
                        <MdApi size={20} /> Context API
                      </span>{" "}
                      <span>
                        <SiReactrouter size={20} /> Angular Router
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card skill-box text-center p-3 ">
                    <h5>
                      <b>UI/UX DESIGN</b>
                    </h5>
                    <p>
                      Designed and developed mobile-first interfaces with full
                      cross-browser compatibility
                    </p>
                    <p>
                      Applied CSS Grid, Flexbox, and media queries for
                      responsive layouts
                    </p>
                    <p>
                      Followed component-driven development to build reusable,
                      maintainable UI structures
                    </p>
                    <p>
                      Focused on clean design, usability, and accessibility
                      principles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 1:
        return (
          <section className="skill-section">
            <div className="container">
              <div className="row g-3 align-items-stretch">
                {/* Left column */}
                <div className="col-md-6 d-flex flex-column gap-3">
                  <div className="card skill-box text-center p-3 flex-fill">
                    <h5>
                      <b>Frameworks</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        <SiSpringboot size={20} />
                        Spring Boot (REST APIs),{" "}
                      </span>{" "}
                      <span>
                        <GrMysql size={20} /> MySQL
                      </span>
                    </p>
                  </div>
                  <div className="card skill-box text-center p-3 flex-fill">
                    <h5>
                      <b>Tools</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        <SiPostman size={20} />
                        Postman,
                      </span>{" "}
                      <span>
                        <PiFileSqlDuotone size={20} />
                        MySQL Workbench
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right column (taller card) */}
                <div className="col-md-6">
                  <div className="card skill-box text-center p-3 h-100">
                    <h5>
                      <b>Languages</b>
                    </h5>
                    <p className="skill-items">
                      <span>
                        <FaJava size={20} />
                        Java(Learning, hands-on practice),
                      </span>{" "}
                      <span>
                        {" "}
                        <PiFileSqlDuotone size={20} />
                        SQL(Basic knowledge),{" "}
                      </span>
                      <span>
                        <FaPython size={20} />
                        Python (Beginner, currently learning)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 2:
        return (
          <section className="skill-section">
            <div className="container">
              <div className="row g-3 align-items-stretch">
                {/* Left column (taller card) */}
                <div className="col-md-6">
                  <div className="card skill-box text-center p-3 h-100">
                    <h5>
                      <b>Development Tools</b>
                    </h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <span style={{ color: "#1b29c0ff" }}>
                          Git & GitHub:
                        </span>{" "}
                        Skilled in version control, branching, and managing pull
                        requests for collaborative development.
                      </li>
                      <li>
                        <span style={{ color: "#1b29c0ff" }}>VS Code:</span>{" "}
                        Main coding environment with useful extensions for
                        debugging, linting, and productivity.
                      </li>
                      <li>
                        <span style={{ color: "#1b29c0ff" }}>
                          Chrome DevTools:
                        </span>{" "}
                        Used for debugging, inspecting layouts, monitoring
                        network activity, and performance optimization.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div className="col-md-6 d-flex flex-column gap-3">
                  <div className="card skill-box text-center p-3 flex-fill">
                    <h5>
                      <b>API & Authentication</b>
                    </h5>
                    <p className="skill-items">
                      <span>API Integration</span>
                      <span>RESTful API Consumption</span>
                      <span>JWT-Based Authentication</span>
                      <span>
                        Handling async API states (Loading, Error, Success)
                      </span>
                    </p>
                  </div>

                  <div className="card skill-box text-center p-3 flex-fill">
                    <h5>
                      <b>Workflow & Methodologies</b>
                    </h5>
                    {/* <ul className="list-unstyled mb-0"> */}
                    <p className="skill-items">
                      <span>
                        {" "}
                        <DiScrum size={20} />
                        Agile (Scrum)
                      </span>
                      <span>
                        <LiaJira size={20} />
                        Jira / Trello
                      </span>
                      <span>
                        <VscSettingsGear size={20} />
                        CI/CD Awareness
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="skill p-4">
      <h3 className="text-center" style={{color:"#003366"}}>
        <b>SKILLS</b>
      </h3>

      <nav className="Skill-navbar">
        <ul className="Skill-navbar-links">
          {sections.map((section, index) => (
            <li
              key={section}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{section}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="skills-wrapper">{renderContent()}</div>
    </div>
  );
};

export default Skills;
